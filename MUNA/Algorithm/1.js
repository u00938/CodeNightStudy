const permutation = (str, n) => {
  if (n === 1) return [...str];

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const sub = permutation(
      [...str].filter((_, idx) => idx !== i),
      n - 1
    );
    for (let j = 0; j < sub.length; j++) {
      result.push([str[i], ...sub[j]].join(""));
    }
  }

  return result;
};

const isPrime = (number) => {
  if (number === 2) return true;

  if (number % 2 === 0 || number < 2) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

function solution(numbers) {
  let arr = [];

  for (let i = 1; i <= numbers.length; i++) {
    arr.push(...permutation(numbers, i));
  }

  arr = [...new Set(arr.map((v) => Number(v)))];

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result++;
    }
  }

  return result;
}

console.log(solution("011"));

// console.log(permutation("17", 1));
