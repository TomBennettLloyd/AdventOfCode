import {readFileSync} from 'fs'

const readFile = (filename) => {
  const file = readFileSync(filename, {encoding: 'utf-8'});
  return file.split('\n');
}

const countIncreases = (arr) => {
  let count = 0
  arr.forEach((val, i) => {
    if (i>0 && val > arr[i-1]) count++
  })
  return count
};

export const task2 = (filename) => {
  const data = readFile(filename);

  const numbers = data.map(Number)
  const sums = []
  for (let i = 2; i < numbers.length; i++) {
    sums.push(numbers[i] + numbers[i-1] + numbers[i-2]);
  }

  return countIncreases(sums);
}

export const task1 = (filename) => {
  const data = readFile(filename);

  return countIncreases(data.map(Number));
}