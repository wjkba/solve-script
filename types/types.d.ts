export type Challenge = {
  id: number;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  input_format: string;
  output_format: string;
  examples: string;
  constraints: string;
  starter_code: string;
  function_name: string;
  solution_code: string;
  tests: { input: string; expected: string }[];
  results: {
    output_type: string;
    expected_behavior: string;
  };
};
