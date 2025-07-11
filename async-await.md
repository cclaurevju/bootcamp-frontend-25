# Async - Await

## Introduction

Asynchronous operations are essential in JavaScript, especially for tasks like fetching data from APIs, reading files, or handling timers. Traditionally, JavaScript used **callbacks** and later **Promises** to manage asynchronous code. The `async`/`await` syntax, introduced in ES2017 (ES8), provides a more readable and structured way to write asynchronous code using Promises under the hood.

### Purposes:

- Make asynchronous code look synchronous.
- Simplify promise chains.
- Improve code readability and maintainability.
- Provide straightforward error handling using try/catch.

- `async`: Declares a function as asynchronous, which means it implicitly returns a Promise.
- `await`: Pauses the execution of the `async` function until the Promise is resolved or rejected.

## How to use

An `async` function declaration creates an AsyncFunction object. Each time when an `async` function is called, it returns a new `Promise` which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```

- Making API Calls

```javascript
async function getUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
```

- Reading Files

```js
const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
```

## Similar Functions to `async/await`

### Callback Functions

A **callback** is a function passed as an argument to another function and executed later, often after some asynchronous task completes.
**Example**

```js
function getUser(id, callback) {
  setTimeout(() => {
    const user = { id, name: "Alice" };
    callback(user);
  }, 1000);
}
getUser(1, function (user) {
  console.log("User:", user);
});
```

### Promises with .then()

Promises provide a cleaner way to handle async operations than callbacks, allowing chaining with .then() and handling errors with .catch()
**Example**

```js
getUser()
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Advantages

### More readable and cleaner code

Using `async/await` makes asynchronous code look like synchronous code, which is easier to read and understand.

**Example:**

```js
async function getData() {
  const user = await getUser();
  const profile = await getProfile(user.id);
  console.log(profile);
}
```

### Simple error handling

With async/await, we can use traditional try/catch blocks to handle errors.

**Example:**

```js
async function fetchData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
```

### Avoids "callback hell"

Callback hell happens when we have nested callbacks, making the code messy and hard to follow

```js
// callbackhell
getUser((user) => {
  getProfile(user.id, (profile) => {
    getPosts(profile.id, (posts) => {
      console.log(posts);
    });
  });
});
```

```js
// solution with async/await
async function loadAll() {
  const user = await getUser();
  const profile = await getProfile(user.id);
  const posts = await getPosts(profile.id);
  console.log(posts);
}
```

## Disadvantages

### Blocks the event loop for sequential operations

When we use await in a loop or with independent operations, it forces each one to wait unnecessarily.

```js
await fetchUser();
await fetchPosts();
await fetchComments();
```

### Higher risk of silent errors when forgetting await

If we forget await, we get a Promise instead of the expected value, which can lead to bugs.

```js
async function getData() {
  const result = fetchData(); // Forgot "await"
  console.log(result); // Logs: Promise { <pending> }
}
```
