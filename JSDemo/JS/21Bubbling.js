// Bubbling Section
let outerDiv = document.querySelector(".outer-div");
let innerDiv = document.querySelector(".inner-div");
let pTag = document.querySelector(".p");

pTag.addEventListener("click", (e) => {
  alert("P");
  e.stopPropagation();
});
innerDiv.addEventListener("click", (e) => {
  alert("Inner Div");
});
outerDiv.addEventListener("click", (e) => {
  alert("Outer Div");
});
