// write a function that takes a string and returns the number of vowels in the string

function countVowels(str) {
  // Define a regular expression to match vowels
  const vowelRegex = /[aeiou]/gi;

  // Use the match method to find all matches and return the count
  const matches = str.match(vowelRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of consonants in the string
function countConsonants(str) {
  // Define a regular expression to match consonants
  const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

  // Use the match method to find all matches and return the count
  const matches = str.match(consonantRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of digits in the string
function countDigits(str) {
  // Define a regular expression to match digits
  const digitRegex = /\d/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(digitRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of spaces in the string
function countSpaces(str) {
  // Define a regular expression to match spaces
  const spaceRegex = /\s/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(spaceRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of special characters in the string
function countSpecialChars(str) {
  // Define a regular expression to match special characters
  const specialCharRegex = /[^a-zA-Z0-9\s]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(specialCharRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of words in the string
function countWords(str) {
  // Split the string by spaces and filter out empty strings
  const words = str.split(/\s+/).filter((word) => word.length > 0);
  return words.length;
}

// write a function that takes a string and returns the number of sentences in the string
function countSentences(str) {
  // Split the string by sentence-ending punctuation and filter out empty strings
  const sentences = str
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0);
  return sentences.length;
}

// write a function that takes a string and returns the number of paragraphs in the string
function countParagraphs(str) {
  // Split the string by paragraph-ending newline characters and filter out empty strings
  const paragraphs = str
    .split(/\n+/)
    .filter((paragraph) => paragraph.trim().length > 0);
  return paragraphs.length;
}

// write a function that takes a string and returns the number of lines in the string
function countLines(str) {
  // Split the string by newline characters and filter out empty strings
  const lines = str.split(/\n+/).filter((line) => line.trim().length > 0);
  return lines.length;
}

// write a function that takes a string and returns the number of unique characters in the string
function countUniqueChars(str) {
  // Create a Set to store unique characters
  const uniqueChars = new Set();

  // Iterate over each character in the string and add it to the Set
  for (const char of str) {
    uniqueChars.add(char);
  }

  // Return the size of the Set
  return uniqueChars.size;
}

// write a function that takes a string and returns the number of uppercase letters in the string
function countUppercase(str) {
  // Define a regular expression to match uppercase letters
  const uppercaseRegex = /[A-Z]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(uppercaseRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of lowercase letters in the string
function countLowercase(str) {
  // Define a regular expression to match lowercase letters
  const lowercaseRegex = /[a-z]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(lowercaseRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of non-alphanumeric characters in the string
function countNonAlphanumeric(str) {
  // Define a regular expression to match non-alphanumeric characters
  const nonAlphanumericRegex = /[^a-zA-Z0-9]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(nonAlphanumericRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of alphanumeric characters in the string
function countAlphanumeric(str) {
  // Define a regular expression to match alphanumeric characters
  const alphanumericRegex = /[a-zA-Z0-9]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(alphanumericRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of punctuation characters in the string
function countPunctuation(str) {
  // Define a regular expression to match punctuation characters
  const punctuationRegex = /[.,!?;:]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(punctuationRegex);
  return matches ? matches.length : 0;
}

// write a function that takes a string and returns the number of control characters in the string
function countControlChars(str) {
  // Define a regular expression to match control characters
  const controlCharRegex = /[\x00-\x1F\x7F]/g;

  // Use the match method to find all matches and return the count
  const matches = str.match(controlCharRegex);
  return matches ? matches.length : 0;
}

// write a function that takes an array of numbers as n and a number as k and returns the most frequent number in the array
function mostFrequent(arr, k) {
  // Create a frequency map to count occurrences of each number
  const frequencyMap = {};

  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Build an array of [number, frequency] pairs
  const freqArray = Object.entries(frequencyMap);

  // Use a min-heap to keep track of the top k frequent elements
  // We'll use a simple array and sort it for demonstration, but for large k, use a real heap implementation
  const heap = [];

  for (const [num, freq] of freqArray) {
    heap.push([Number(num), freq]);
    // Keep the heap size at most k
    heap.sort((a, b) => a[1] - b[1]); // Min-heap based on frequency
    if (heap.length > k) {
      heap.shift(); // Remove the smallest frequency
    }
  }

  // After processing, the heap contains the k most frequent elements (lowest freq at index 0)
  // Sort by frequency descending to get the k-th most frequent at the correct position
  heap.sort((a, b) => b[1] - a[1]);
  return heap[k - 1] ? heap[k - 1][0] : undefined;
}

// Old method for mostFrequent
function mostFrequentOld(arr, k) {
  // Create a frequency map to count occurrences of each number
  const frequencyMap = {};

  // Iterate over the array and populate the frequency map
  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Sort the numbers by their frequency in descending order
  const sortedNumbers = Object.keys(frequencyMap).sort(
    (a, b) => frequencyMap[b] - frequencyMap[a]
  );

  // Return the k-th most frequent number
  return sortedNumbers[k - 1];
}
