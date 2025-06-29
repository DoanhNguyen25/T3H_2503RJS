const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    name: "John Smith",
    age: 30,
  },
];

(function saveDataToLocalStorage() {
  localStorage.setItem("data", JSON.stringify(data));
})();

function getDataFromLocalStorage() {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

console.log(typeof getDataFromLocalStorage()); // Output: John Doe
