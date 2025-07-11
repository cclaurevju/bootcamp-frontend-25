// In this exercise you have to use the following functions using async and await

function checkPositive(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0) {
        resolve("The number is positive.");
      } else {
        reject("The number is not positive.");
      }
    }, 1000);
  });
}

function checkDivisibleByThree(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 3 === 0) {
        resolve("The number is divisible by 3.");
      } else {
        reject("The number is not divisible by 3.");
      }
    }, 1000);
  });
}

function sumNumbers(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Both inputs must be numbers.");
      }
    }, 500);
  });
}

// This code is using then syntax for promisses, which is not correct, change it to async and await and
// show the result data correctly

checkPositive(10)
  .then((result) => {
    console.log(result);
    return checkDivisibleByThree(10);
  })
  .then((result) => {
    console.log(result);
    return sumNumbers(10, 20);
  })
  .then((result) => {
    console.log("Sum:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
