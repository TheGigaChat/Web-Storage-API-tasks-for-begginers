// HTML

const buttonSection = document.querySelector("#buttonSection");
buttonSection.innerHTML = `<button type="submit" id="button">Submit</button>
<button type="submit" id="clearButton">Clear</button>`;

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const clearButton = document.querySelector("#clearButton");
const form = document.getElementById("form");

// INITIALIZATION

let userInput = "";
let inputData;

// FUNCTIONS

const checkLocalStorage = () => {
  inputData = JSON.parse(localStorage.getItem("inputData"));
  if (inputData != null) {
    input.value = inputData;
  }
};

const catchInputData = () => {
  userInput = input.value;

  // STORAGE
  if (userInput !== "") {
    localStorage.setItem("inputData", JSON.stringify(userInput));
    inputData = JSON.parse(localStorage.getItem("inputData"));
    //console.log(inputData);
  }
};

const clearStorage = () => {
  localStorage.clear();
};

const handleFormSubmit = (event) => {
  if (input.value !== "") {
    console.log(input.value);
  }
  event.preventDefault();
};

// EVENT LISTENERS

button.addEventListener("click", catchInputData);
clearButton.addEventListener("click", clearStorage);
form.addEventListener("submit", handleFormSubmit);

// MAIN LOOP

checkLocalStorage();
