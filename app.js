function modulus(a, b) {
  return a % b;
}

let result = modulus(10, 3);
document.getElementById("result").textContent =
  "The remainder of 10 divided by 3 is: " + result;

function findAverage(a, b, c) {
  const sum = a + b + c;
  const average = sum / 3;
  return average;
}

let averageResult = findAverage(3, 4, 5);
document.getElementById("result1").textContent =
  "The average of 3, 4, and 5 is: " + averageResult;

function transformToSquareObjects(numbers) {
  return numbers.map((number) => {
    return { square: number * number };
  });
}

const inputArray = [1, 2, 3];
const result2 = transformToSquareObjects(inputArray);
console.log(result2);

function sumArrayElements(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

const inputArray1 = [1, 2, 3, 4, 5];
const result3 = sumArrayElements(inputArray1);
console.log(result3);
