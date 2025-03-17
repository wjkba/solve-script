"use client";
import ButtonPrimary from "@/components/ButtonPrimary";
import ChallengeInfo from "@/components/ChallengeInfo";
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

interface TestResult {}

const defaultValue = `// Write a function that adds two numbers
function add(a, b) {
  return a + b;
}

`;

const challenge = {
  functionName: "add",
  title: "a+b",
  description: "a+b",
  tests: [
    { input: "2, 2", expected: 4 },
    { input: "1, 10", expected: 11 },
    { input: "5, -10", expected: -5 },
  ],
};

export default function EditorPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const codeRef = useRef<string>(null);

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
    }
  }

  function handleRunCode() {
    if (codeRef.current) {
      const userCode = codeRef.current;
      const testResults = challenge.tests.map((test) => {
        try {
          const userFunction = new Function(
            userCode + `return ${challenge.functionName}(${test.input})`,
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

  return (
    <div className="lg:grid lg:min-h-[90dvh] lg:grid-cols-3 lg:gap-8 lg:py-6">
      <div className="relative rounded bg-[#323234] p-3 lg:col-span-2">
        <Editor
          defaultValue={defaultValue}
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
      <div className="rounded bg-[#252526] p-6">
        <ChallengeInfo />
      </div>
    </div>
  );
}
