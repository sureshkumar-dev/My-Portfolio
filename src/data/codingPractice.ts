import type { CodingProblem } from '../types';

export const codingProblems: CodingProblem[] = [
  {
    id: 'code-arr-1',
    title: 'Two Sum',
    category: 'Arrays',
    difficulty: 'Easy',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' }
    ],
    hint: 'Use a Hash Map to store previously seen numbers and their indices to achieve O(N) time complexity.',
    optimalSolution: `function twoSum(nums: number[], target: number): number[] {\n  const map = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)'
  },
  {
    id: 'code-arr-2',
    title: 'Container With Most Water',
    category: 'Two pointers',
    difficulty: 'Medium',
    description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' }
    ],
    hint: 'Use two pointers starting at opposite ends. Move the pointer with the smaller height inward.',
    optimalSolution: `function maxArea(height: number[]): number {\n  let max = 0, left = 0, right = height.length - 1;\n  while (left < right) {\n    const h = Math.min(height[left], height[right]);\n    max = Math.max(max, h * (right - left));\n    if (height[left] < height[right]) left++; else right--;\n  }\n  return max;\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'code-str-1',
    title: 'Valid Anagram',
    category: 'Strings',
    difficulty: 'Easy',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true' }
    ],
    hint: 'Count character frequencies using a fixed-size array of 26 integers or a Map.',
    optimalSolution: `function isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n  const count = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    count[s.charCodeAt(i) - 97]++;\n    count[t.charCodeAt(i) - 97]--;\n  }\n  return count.every(c => c === 0);\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'code-slide-1',
    title: 'Longest Substring Without Repeating Characters',
    category: 'Sliding window',
    difficulty: 'Medium',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with length 3.' }
    ],
    hint: 'Use a dynamic sliding window storing character last-seen index in a Map.',
    optimalSolution: `function lengthOfLongestSubstring(s: string): number {\n  const map = new Map<string, number>();\n  let maxLen = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (map.has(s[right]) && map.get(s[right])! >= left) {\n      left = map.get(s[right])! + 1;\n    }\n    map.set(s[right], right);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(min(N, M))'
  },
  {
    id: 'code-stack-1',
    title: 'Valid Parentheses',
    category: 'Stack',
    difficulty: 'Easy',
    description: 'Given a string s containing just characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if input string is valid.',
    examples: [
      { input: 's = "()[]{}"', output: 'true' }
    ],
    hint: 'Push expected closing bracket onto stack when opening bracket is encountered.',
    optimalSolution: `function isValid(s: string): boolean {\n  const stack: string[] = [];\n  const pairs: Record<string, string> = { \'(\': \')\', \'{\': \'}\', \'[\': \']\' };\n  for (const char of s) {\n    if (pairs[char]) stack.push(pairs[char]);\n    else if (stack.pop() !== char) return false;\n  }\n  return stack.length === 0;\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)'
  },
  {
    id: 'code-ll-1',
    title: 'Reverse Linked List',
    category: 'Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' }
    ],
    hint: 'Maintain prev, curr, and next pointers while iterating through the list.',
    optimalSolution: `function reverseList(head: ListNode | null): ListNode | null {\n  let prev: ListNode | null = null, curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'code-bs-1',
    title: 'Binary Search in Rotated Array',
    category: 'Binary Search',
    difficulty: 'Medium',
    description: 'Given sorted array nums rotated at an unknown pivot, find index of target in O(log N) time.',
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' }
    ],
    hint: 'One half (left or right) is guaranteed to be sorted at any binary search midpoint.',
    optimalSolution: `function search(nums: number[], target: number): number {\n  let low = 0, high = nums.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[low] <= nums[mid]) {\n      if (nums[low] <= target && target < nums[mid]) high = mid - 1;\n      else low = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[high]) low = mid + 1;\n      else high = mid - 1;\n    }\n  }\n  return -1;\n}`,
    timeComplexity: 'O(log N)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'code-tree-1',
    title: 'Maximum Depth of Binary Tree',
    category: 'Trees',
    difficulty: 'Easy',
    description: 'Given the root of a binary tree, return its maximum depth.',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' }
    ],
    hint: 'Use simple DFS recursion: 1 + Math.max(depth(left), depth(right)).',
    optimalSolution: `function maxDepth(root: TreeNode | null): number {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}`,
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(H)'
  },
  {
    id: 'code-dp-1',
    title: 'Coin Change',
    category: 'Dynamic Programming',
    difficulty: 'Medium',
    description: 'Given coins array of different denominations and total amount, return fewest coins needed to make up amount.',
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' }
    ],
    hint: 'Use 1D bottom-up DP table dp[i] storing minimum coins for sub-amount i.',
    optimalSolution: `function coinChange(coins: number[], amount: number): number {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let i = 1; i <= amount; i++) {\n    for (const coin of coins) {\n      if (i - coin >= 0) {\n        dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}`,
    timeComplexity: 'O(Amount * N)',
    spaceComplexity: 'O(Amount)'
  },
  {
    id: 'code-js-1',
    title: 'Debounce Function Implementation',
    category: 'JavaScript coding',
    difficulty: 'Medium',
    description: 'Implement custom debounce(fn, delay) utility function in JavaScript.',
    examples: [
      { input: 'const debouncedFn = debounce(searchFn, 300)', output: 'Executes searchFn only after 300ms of silence' }
    ],
    hint: 'Use closures to retain timer reference across calls. Clear previous timer with clearTimeout.',
    optimalSolution: `function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {\n  let timerId: ReturnType<typeof setTimeout> | null = null;\n  return function(this: any, ...args: Parameters<T>) {\n    if (timerId) clearTimeout(timerId);\n    timerId = setTimeout(() => {\n      fn.apply(this, args);\n    }, delay);\n  };\n}`,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'code-ts-1',
    title: 'Deep Readonly Utility Type',
    category: 'TypeScript coding',
    difficulty: 'Hard',
    description: 'Implement custom TypeScript generic DeepReadonly<T> type that recursively marks all properties of an object or array as readonly.',
    examples: [
      { input: 'type ReadonlyUser = DeepReadonly<{ user: { name: string } }>', output: 'Enforces user.name is readonly' }
    ],
    hint: 'Use conditional types checking T extends Function ? T : T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T.',
    optimalSolution: `type DeepReadonly<T> = T extends (...args: any[]) => any\n  ? T\n  : T extends Array<infer U>\n  ? ReadonlyArray<DeepReadonly<U>>\n  : T extends object\n  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }\n  : T;`,
    timeComplexity: 'Compile-time',
    spaceComplexity: 'Compile-time'
  },
  {
    id: 'code-sql-1',
    title: 'Second Highest Salary',
    category: 'SQL problems',
    difficulty: 'Medium',
    description: 'Write SQL query to find second highest salary from Employee table. Return null if no second highest.',
    examples: [
      { input: 'Employee = [{id:1, salary:100}, {id:2, salary:200}, {id:3, salary:300}]', output: '200' }
    ],
    hint: 'Use SELECT MAX(salary) WHERE salary < (SELECT MAX(salary) FROM Employee) or DENSE_RANK().',
    optimalSolution: `SELECT (\n  SELECT DISTINCT salary\n  FROM Employee\n  ORDER BY salary DESC\n  LIMIT 1 OFFSET 1\n) AS SecondHighestSalary;`,
    timeComplexity: 'O(N log N)',
    spaceComplexity: 'O(1)'
  }
];
