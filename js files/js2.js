let arr = [];

let elements = document.querySelectorAll(".as-imagegrid-item");

elements.forEach((e)=>arr.push(e.innerText.replace('\nSupport', '')));