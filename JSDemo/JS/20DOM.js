// Address Section
let addressElement = document.querySelector(".address");
let writingElement = document.querySelector(".writing");
let outputElement = document.querySelector(".output");

addressElement.addEventListener("input", () => {
  writingElement.textContent = "Changing...";
  outputElement.innerHTML = addressElement.value;
  hideElement.hidden = false;
});

addressElement.addEventListener("blur", () => {
  writingElement.textContent = "";
});

let hideButton = document.querySelector(".hide-btn");
let hideElement = document.querySelector(".hide-elem");
hideElement.hidden = true;

hideButton.addEventListener("click", () => {
  hideElement.hidden = !hideElement.hidden;
});

// Form Section
let submitBtn = document.querySelector(".submit-btn");
let formOutput = document.querySelector(".form-output");
formOutput.hidden = true;

submitBtn.addEventListener("click", (event) => {
  formOutput.hidden = false;
  formOutput.innerHTML = "";
  formOutput.innerHTML += `<pre>
Name: ${myForm.name.value},
Email: ${myForm.email.value},
Gender: ${myForm.gender.value}
    </pre>`;
  event.preventDefault();
});

let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
  formOutput.innerHTML = "";
  formOutput.hidden = true;
});

// Ul Section
let ul = document.querySelector(".ul");
ul.firstElementChild.textContent = "First Element Child";
ul.firstElementChild.nextElementSibling.textContent = "Next Element Sibling";
ul.lastElementChild.innerHTML = `<b>Last Element Child</b>`;
ul.lastElementChild.previousElementSibling.textContent = `Previous Element Sibling`;

ul.prepend("Prepend");
ul.append("Append");
ul.before("Before UL");
ul.after("After UL");

//Create Element Section
let inputValues = document.querySelector(".input-values");
inputValues.addEventListener("blur", () => {
  let values = inputValues.value.split(", ");
  let ulElement = document.createElement("ul");
  for (i of values) {
    ulElement.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
  }
  let outputValues = document.querySelector(".output-values");
  outputValues.innerHTML = "";
  outputValues.append(ulElement);
});
