export type Challenge = {
  id: number;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topics: string;
  description: string;
  input_format: string;
  output_format: string;
  examples: string;
  constraints: string;
  starter_code: string;
  function_name: string;
  solution_code: string;
  tests: { input: string; expected: string }[];
};

export type TestResult = {
  input: string;
  output?: any;
  expected?: any;
  passed: boolean;
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  icon_name: "star" | "check";
  xp_reward: number;
};
