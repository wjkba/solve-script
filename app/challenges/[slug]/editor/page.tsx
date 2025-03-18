"use client";
import ChallengeInfo from "@/components/ChallengeInfo";
import { Challenge } from "@/types/types";
import Editor from "@monaco-editor/react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function EditorPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [isDesktop, setIsDesktop] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const codeRef = useRef<string>(null);

  useEffect(() => {
    async function fetchChallenge() {
      if (!slug) return;
      try {
        const response = await fetch(`/api/challenges/${slug}`);
        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data = await response.json();
        setChallenge(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchChallenge();
  }, [slug]);

  useEffect(() => {
    const savedCode = localStorage.getItem(`userCode-${params.slug}`);
    if (savedCode) setDefaultValue(savedCode);
  }, []);

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
    if (codeRef.current && challenge) {
      const userCode = codeRef.current;
      const testResults = challenge.tests.map((test) => {
        try {
          const userFunction = new Function(
            userCode + `return ${challenge.function_name}(${test.input})`,
          );
          const output = userFunction();
          const passed = output === test.expected;
          return {
            input: test.input,
            output,
            expected: test.expected,
            passed,
          };
        } catch (error) {
          console.error("Error while executing test", error);
          return {
            input: test.input,
            passed: false,
          };
        }
      });

      console.log(testResults);
    }
  }

  if (!challenge) {
    return <></>;
  }

  return (
    <div className="lg:grid lg:min-h-[90dvh] lg:grid-cols-3 lg:gap-8 lg:py-6">
      <div className="relative rounded bg-[#323234] p-3 lg:col-span-2">
        <Editor
          defaultValue={challenge.starter_code}
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
          }}
        />
        <button
          onClick={handleRunCode}
          className="absolute right-4 bottom-4 cursor-pointer"
        >
          Run Code
        </button>
      </div>
      <div className="rounded bg-[#252526] p-6">{/* <ChallengeInfo /> */}</div>
    </div>
  );
}
