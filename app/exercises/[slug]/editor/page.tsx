"use client";
import ExerciseInfo from "@/components/ExerciseInfo";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

const defaultValue = `// Write a function that adds two numbers
function add(a, b) {
  return a + b;
}

// Test cases
console.log(add(2, 3)); // Expected output: 5
console.log(add(-1, 1)); // Expected output: 0
console.log(add(10, 20)); // Expected output: 30
`;

export default function EditorPage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function checkIfDesktop() {
      const dekstopBreakpoint = 1024;
      setIsDesktop(window.innerWidth >= dekstopBreakpoint);
    }

    checkIfDesktop();

    window.addEventListener("resize", checkIfDesktop);

    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  return (
    <div className="lg:grid lg:min-h-[90dvh] lg:grid-cols-3 lg:gap-8 lg:py-6">
      <div className="rounded bg-[#323234] p-4 lg:col-span-2">
        <Editor
          defaultValue={defaultValue}
          height="40vh"
          defaultLanguage="javascript"
          theme="vs-dark"
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
      </div>
      <div className="rounded bg-[#252526] p-6">
        <ExerciseInfo />
      </div>
    </div>
  );
}
