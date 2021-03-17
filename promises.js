// Fetch
// Example: Simple Success
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log('FETCH EXAMPLE', data));

// Example: POST instead of GET (using the optional options argument)
fetch("https://reqres.in/api/user", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Paxton'
  })
})
  .then(res => res.json())
  .then(data => console.log('POST EXAMPLE-->', data));

// Promises
// 3 States: Pending, fulfilled, rejected.
// Promise.all Example 1
// Takes an array and waits until all promises have resolved.
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log('PROMISE.ALL EXAMPLE 1',(`${response.url}: ${response.status}`))
  )
);

// Promise.all Example 2
const promise1 = Promise.resolve("Resolved promise");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log('PROMISE.ALL EXAMPLE 2', values)
);

// Async / Await
// "await" translates to .then (syntactic sugar)

// async function fetchUsers() {
const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
    const data = await res.json();
  
    console.log('ASYNC AWAIT EXAMPLE -->', data);
  } catch {
    console.error(err);
  }
}

fetchUsers();
