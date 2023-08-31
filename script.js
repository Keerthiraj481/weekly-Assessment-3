// 1.Write a program that takes an array of elements and counts the occurrences of each element using a Map.
// Sample Input: const arr = [1, 2, 3, 2, 1, 4, 5, 4];
// Sample Output:  Map(5) {
//   1 => 2,
//   2 => 2,
//   3 => 1,
//   4 => 2,
//   5 => 1

const arr = [1, 2, 3, 2, 1, 4, 5, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log("Problem No. 1");
console.log(counts);
console.log(`1 => ${counts[1]},`);
console.log(`2 => ${counts[2]},`);
console.log(`3 => ${counts[3]},`);
console.log(`4 => ${counts[4]},`);
console.log(`5 => ${counts[5]}`);
console.log("=============================");

// 2. Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.
// Sample Input:  const arr = [1, 4, 20, 3, 10, 5];
//                            const targetSum = 33;
// Sample Output:  true

function subarray(arr, targetSum) {
  const sums = new Set();
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === targetSum || sums.has(currentSum - targetSum)) {
      return true;
    }

    sums.add(currentSum);
  }

  return true;
}

const array = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const result = subarray(array, targetSum);

console.log("Problem No. 2");
console.log(result);
console.log("=============================");

// 3. Write a program that takes an array of strings and groups anagrams together using a Map.
// Sample Input: const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const chunkSize = 3;
// Sample Output: Map(3) {
//   "aet" => ["eat", "tea", "ate"],
//   "ant" => ["tan", "nat"],
//   "abt" => ["bat"]
// }

console.log("Problem No. 3");

function anagrams(strings) {
  const anagram = new Map();

  for (const str of strings) {
    const sortedStr = str.split("").sort().join("");

    if (anagram.has(sortedStr)) {
      anagram.get(sortedStr).push(str);
    } else {
      anagram.set(sortedStr, [str]);
    }
  }

  return anagram;
}

const chunk = ["eat", "tea", "tan", "ate", "nat", "bat"];
const size = anagrams(chunk);
console.log(size);

console.log("=============================");

// 4. Write a program that takes an array of strings and reverses each string in the array using the array methods.
// Sample Input:  const arr = ["apple", "banana", "orange"];
// Sample Output:  ["elppa", "ananab", "egnaro"]

console.log("Problem No. 4");

function reverseString(str) {
  return string.map((str) => str.split("").reverse().join(""));
}
const string = ["apple", "banana", "orange"];
const res = reverseString(string);
console.log(res);

console.log("=============================");

// 5.Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods.
// Sample Input const arr = [1, 2, 4, 7, 9, 16, 25];
// Sample Output:  [1, 4, 9, 16, 25]
console.log("Problem No. 5");

function perfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
}

function filterSquares(arr) {
  return arr.filter((num) => perfectSquare(num));
}

const arra = [1, 2, 4, 7, 9, 16, 25];
const squares = filterSquares(arra);
console.log(squares);

console.log("=============================");

// 6.Write a program that takes two objects and merges them into a single object
// Sample Input:  const obj1 = { name: "John", age: 30 };
// const obj2 = { city: "New York", occupation: "Engineer" };
// Sample Output:  {
//   name: "John",
//   age: 30,
//   city: "New York",
//   occupation: "Engineer"
// }
console.log("Problem No. 6");

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };

const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);

console.log("=============================");

// 7.Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().
// Sample Input: const arr = [
//   { key: "name", value: "John" },
//   { key: "age", value: 30 },
//   { key: "city", value: "New York" }
// ];
// Sample Output:  { name: "John", age: 30, city: "New York" }

console.log("Problem No. 7");

function arrObject(arr) {
  const singleObject = {};

  arr.forEach((item) => {
    singleObject[item.key] = item.value;
  });

  return singleObject;
}

const data = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

const singleObject = arrObject(data);
console.log(singleObject);

console.log("=============================");

// 8.Write a program that takes a function with an array parameter and destructure the array inside the function.
// Sample Input:
//  function displayArray([first, second, ...rest]) {
//   console.log(`First Element: ${first}`);
//   console.log(`Second Element: ${second}`);
//   console.log(`Rest Elements: ${rest}`);
// }
// const arr = [1, 2, 3, 4, 5];
// Sample Output:
//  First Element: 1
// Second Element: 2
// Rest Elements: 3,4,5

console.log("Problem No. 8");

function dispArr([first, second, ...rest]) {
  console.log(`First Element: ${first}`);
  console.log(`Second Element: ${second}`);
  console.log(`Rest Elements: ${rest}`);
}

const num = [1, 2, 3, 4, 5];
dispArr(num);

console.log("=============================");

// 9.Write a program that takes a nested object containing numeric values and calculates the sum of all values.
// Sample Input:
// const nestedObj = {
//   a: 1,
//   b: 2,
//   c: { d: 3, e: { f: 4 } },
// };
// Sample Output:  Sum: 10
console.log("Problem No. 9");
console.log("I don't know this problem.");

console.log("=============================");

// 10. Write a program that takes an object and counts the occurrences of each property
// Sample Input: const obj = { name: "John", age: 30, city: "New York", profession: "Engineer" };
// Sample Output:  {
//   name: 1,
//   age: 1,
//   city: 1,
//   profession: 1,
// }

console.log("Problem No. 10");
console.log("I don't know this problem.");

console.log("=============================");
