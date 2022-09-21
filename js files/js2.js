// created an empty array to receive values
let arr = [];

// selecting all elements with ALl
let elements = document.querySelectorAll(".as-imagegrid-item");

// using a foreach method which selects the inner value or each element and returns their innertext
elements.forEach((e)=>arr.push(e.innerText.replace('\nSupport', ''))); // replaced values with empty string using .replace method