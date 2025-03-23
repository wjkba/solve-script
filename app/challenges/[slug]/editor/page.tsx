"use client";
import ChallengeInfo from "@/components/ChallengeInfo";
import EditorInfoPanel from "@/components/EditorInfoPanel";
import { Challenge, TestResult } from "@/types/types";
import Editor from "@monaco-editor/react";
import { notFound, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [isDesktop, setIsDesktop] = useState(false);
  const [defaultEditorValue, setDefaultEditorValue] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [activeTab, setActiveTab] = useState("info");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const codeRef = useRef<string>(null);

  useEffect(() => {
    async function fetchChallenge() {
      if (!slug) return;
      try {
        const response = await fetch(`/api/challenges/${slug}`);
        if (!response.ok) {
          router.push("/challenges/404");
        }

        const data = await response.json();
        data.tests = await JSON.parse(data.tests);
        console.log(data.tests);
        setChallenge(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchChallenge();
  }, [slug]);

  useEffect(() => {
    if (challenge) {
      const savedCode = localStorage.getItem(`userCode-${params.slug}`);
      let defaultValue = savedCode ? savedCode : challenge.starter_code;
      if (savedCode && savedCode.length < 10)
        defaultValue = challenge.starter_code;
      codeRef.current = defaultValue;
      setDefaultEditorValue(defaultValue);
    }
  }, [challenge]);

  useEffect(() => {
    function checkIfDesktop() {
      const dekstopBreakpoint = 1024;
      setIsDesktop(window.innerWidth >= dekstopBreakpoint);
    }

    checkIfDesktop();

    window.addEventListener("resize", checkIfDesktop);

    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  function handleEditorChange(value: string | undefined, event: any) {
    if (value) {
      codeRef.current = value;
      localStorage.setItem(`userCode-${params.slug}`, value);
    }
  }

  function handleRunCode() {
    let errors = 0;
    if (codeRef.current && challenge) {
      const userCode = codeRef.current;
      const testResults = challenge.tests.map((test) => {
        try {
          const userFunction = new Function(
            userCode + `return ${challenge.function_name}(${test.input})`,
          );
          console.log("🚀 ~ testResults ~ userFunction:", userFunction);
          const output = userFunction();
          const passed = output === test.expected;
          return {
            input: test.input,
            output,
            expected: test.expected,
            passed,
          };
        } catch (error) {
          errors++;
          if (error instanceof Error) {
            setErrorMessage(error.message);
          }
          return {
            input: test.input,
            passed: false,
          };
        }
      });

      if (errors == 0) setErrorMessage(null);

      console.log(testResults);
      setResults(testResults);
      setActiveTab("results");
    }
  }

  if (!challenge) {
    return <></>;
  }

  return (
    <div className="lg:grid lg:min-h-[90dvh] lg:grid-cols-3 lg:gap-8 lg:py-6">
      <div className="relative max-h-[85dvh] rounded-md border border-[#3C3C3C] py-8 lg:col-span-2">
        <Editor
          defaultValue={defaultEditorValue}
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            quickSuggestions: false,
            parameterHints: { enabled: false },
            suggestOnTriggerCharacters: false,
            hover: { enabled: false },
            snippetSuggestions: "none",
            tabCompletion: "off",
            scrollbar: {
              vertical: "hidden",
              horizontal: "hidden",
            },
            mouseWheelZoom: true,
            fontSize: 18,
            renderLineHighlight: "none",
            guides: {
              indentation: false,
              highlightActiveIndentation: false,
            },
            overviewRulerLanes: 0,
          }}
        />
        <button
          onClick={handleRunCode}
          className="p absolute right-12 bottom-8 cursor-pointer rounded-md px-4 py-2 text-white outline outline-[hsl(0,0%,30%)]"
        >
          Run Code
        </button>
      </div>

      <EditorInfoPanel
        challenge={challenge}
        results={results}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        errorMessage={errorMessage}
      />
    </div>
  );
}
