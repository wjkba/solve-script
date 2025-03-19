-- Create the challenges table
CREATE TABLE challenges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  difficulty TEXT CHECK(difficulty IN ('Easy', 'Medium', 'Hard')) NOT NULL,
  description TEXT NOT NULL,
  input_format TEXT NOT NULL,
  output_format TEXT NOT NULL,
  examples TEXT NOT NULL,
  constraints TEXT NOT NULL,
  starter_code TEXT NOT NULL,
  function_name TEXT NOT NULL,
  solution_code TEXT NOT NULL,
  tests TEXT NOT NULL
);
INSERT INTO challenges (
    title,
    slug,
    difficulty,
    description,
    input_format,
    output_format,
    examples,
    constraints,
    starter_code,
    function_name,
    solution_code,
    tests
  )
VALUES (
    'Sum Positives',
    'sum-positives',
    'Easy',
    'Sum all positive numbers in an array.',
    'An array of integers (e.g., [1, -4, 7, 12])',
    'A single integer representing the sum of all positive numbers.',
    '[
        "sumPositive([1, -4, 7, 12]); // ➞ 20 (1 + 7 + 12)",
        "sumPositive([-1, -2, -3]); // ➞ 0 (No positive numbers)",
        "sumPositive([0, 5, 10, -10]); // ➞ 15 (5 + 10)"
    ]',
    '["Do not use built-in functions like filter() or reduce()."]',
    'function sumPositive(arr) {
  // Your code here
}',
    'sumPositive',
    'function sumPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}',
    '[
        {"input": "[1, -4, 7, 12]", "expected": 20},
        {"input": "[-1, -2, -3]", "expected": 0},
        {"input": "[0, 5, 10, -10]", "expected": 15}
    ]'
  );