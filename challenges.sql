-- Create the challenges table
CREATE TABLE challenges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  difficulty TEXT CHECK(difficulty IN ('Easy', 'Medium', 'Hard')) NOT NULL,
  topics TEXT NOT NULL,
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
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  xp INTEGER DEFAULT 0,
  completed_challenges TEXT DEFAULT '[]',
  achievements TEXT DEFAULT '[]'
);
INSERT INTO challenges (
    title,
    slug,
    difficulty,
    topics,
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
    'Arrays,Math',
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
INSERT INTO challenges (
    title,
    slug,
    difficulty,
    topics,
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
    'Reverse String',
    'reverse-string',
    'Easy',
    'Strings,Algorithms',
    'Reverse the given string.',
    'A string of characters (e.g., "hello")',
    'The reversed string (e.g., "olleh")',
    '[
        "reverseString(\"hello\"); // ➞ \"olleh\"",
        "reverseString(\"world\"); // ➞ \"dlrow\""
    ]',
    '["Do not use built-in methods like reverse() or split()."]',
    'function reverseString(str) {
  // Your code here
}',
    'reverseString',
    'function reverseString(str) {
      let reversed = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
      }
      return reversed;
    }',
    '[
      {"input": "\"hello\"", "expected": "olleh"},
      {"input": "\"world\"", "expected": "dlrow"},
      {"input": "\"hello there\"", "expected": "ereht olleh"},
      {"input": "\"racecar\"", "expected": "racecar"}
    ]'
  );
INSERT INTO challenges (
    title,
    slug,
    difficulty,
    topics,
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
    'Count Vowels in a String',
    'count-vowels-in-a-string',
    'Medium',
    'Strings,Algorithms',
    'Count the number of vowels (a, e, i, o, u) in the string.',
    'A string of characters (e.g., "hello")',
    'The number of vowels in the string (e.g., 2)',
    '[
        "countVowels(\"hello\"); // ➞ 2",
        "countVowels(\"algorithm\"); // ➞ 3",
        "countVowels(\"aeiou\"); // ➞ 5",
        "countVowels(\"xyz\"); // ➞ 0"
    ]',
    '["Do not use regular expressions."]',
    'function countVowels(str) {
  // Your code here
}',
    'countVowels',
    'function countVowels(str) {
      let vowels = "aeiouAEIOU";  // All possible vowels (including uppercase)
      let count = 0;
  
      // Iterate over each character in the string
      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {  // Check if the character is a vowel
          count++;
        }
      }
  
      return count;
    }',
    '[
        {"input": "\"hello\"", "expected": 2},
        {"input": "\"algorithm\"", "expected": 3},
        {"input": "\"aeiou\"", "expected": 5},
        {"input": "\"xyz\"", "expected": 0}
    ]'
  );
INSERT INTO challenges (
    title,
    slug,
    difficulty,
    topics,
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
    'Longest Substring',
    'longest-substring',
    'Hard',
    'Strings,Algorithms',
    'Find the length of the longest substring without repeating characters.',
    'A string of characters (e.g., "abcabcbb")',
    'An integer representing the length of the longest substring without repeating characters (e.g., 3)',
    '[
        "longestSubstring(\"abcabcbb\"); // ➞ 3",
        "longestSubstring(\"bbbbb\"); // ➞ 1",
        "longestSubstring(\"pwwkew\"); // ➞ 3"
    ]',
    '["Your solution should have a time complexity of O(n)."]',
    'function longestSubstring(str) {
  // Your code here
}',
    'longestSubstring',
    'function longestSubstring(str) {
      let charSet = new Set();
      let left = 0;
      let maxLength = 0;

      for (let right = 0; right < str.length; right++) {
        // Remove characters from the left if they are repeated
        while (charSet.has(str[right])) {
          charSet.delete(str[left]);
          left++;
        }
        
        // Add the current character to the set
        charSet.add(str[right]);
        
        // Calculate the length of the current substring
        maxLength = Math.max(maxLength, right - left + 1);
      }

      return maxLength;
    }',
    '[
        {"input": "\"abcabcbb\"", "expected": 3},
        {"input": "\"bbbbb\"", "expected": 1},
        {"input": "\"pwwkew\"", "expected": 3},
        {"input": "\"dvdf\"", "expected": 3}
    ]'
  );