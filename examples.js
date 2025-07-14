function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Hello...");
  await wait(1000);
  console.log("...World!");
}

console.log("WAIT");
greet();

////////////////////////////////////

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

console.log("FETCH DATA");
fetchData();

////////////////////////////////////

async function sequentialCalls() {
  const first = await Promise.resolve("First result");
  console.log(first);

  const second = await Promise.resolve("Second result");
  console.log(second);
}

console.log("SEQUENTIAL CALLS");
sequentialCalls();

////////////////////////////////////

async function parallelCalls() {
  const [a, b, c] = await Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C"),
  ]);
  console.log(a, b, c); // A B C
}

console.log("PARALLEL CALLS");
parallelCalls();

////////////////////////////////////

function delayLog(msg, delay) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, delay)
  );
}

async function logMessages() {
  const messages = ["One", "Two", "Three"];
  for (const msg of messages) {
    await delayLog(msg, 1000);
  }
}

console.log("LOG MESSAGES");
logMessages();

////////////////////////////////////

async function getNumber() {
  return 42;
}

getNumber().then((result) => console.log("The answer is", result));

////////////////////////////////////

async function mix() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  data.json().then((json) => {
    console.log("Post title:", json.title);
  });
}

console.log("MIX");
mix();

////////////////////////////////////
