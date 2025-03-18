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
  tests TEXT NOT NULL,
  results TEXT NOT NULL
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
    tests,
    results
  )
VALUES (
    'Sum Positives',
    'sum-positives',
    'Easy',
    'Sum all positive numbers in an array.',
    'A string of comma-separated integers (e.g., "1,-4,7,12")',
    'A single integer representing the sum of all positive numbers.',
    '[
        "sumPositive([1, -4, 7, 12]); // ➞ 20 (1 + 7 + 12)",
        "sumPositive([-1, -2, -3]); // ➞ 0 (No positive numbers)",
        "sumPositive([0, 5, 10, -10]); // ➞ 15 (5 + 10)"
    ]',
    '["Do not use built-in functions like filter() or reduce()."]',
    'function sumPositive(arr) {\n  // Your code here\n}',
    'sumPositive',
    'function sumPositive(arr) {\n  return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);\n}',
    '[
        {"input": "sumPositive([1, -4, 7, 12]);", "expected": "20 (1 + 7 + 12)"},
        {"input": "sumPositive([-1, -2, -3]);", "expected": "0 (No positive numbers)"},
        {"input": "sumPositive([0, 5, 10, -10]);", "expected": "15 (5 + 10)"}
    ]',
    '{"output_type": "integer", "expected_behavior": "sum of positive numbers"}'
  );