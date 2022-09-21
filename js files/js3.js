// First Selecting the Nav
let nav = document.querySelector('nav');

// Creating an element to append inside nav
let accordionElement = document.createElement('section');
// Assigned class so styles can be applied
accordionElement.className = "parent";

// creating an element to append inside section
let accordionElementChild = document.createElement('h3');
// giving inner text(our value) to h3
accordionElementChild.innerText = 'Hello there, Aryan this side.'

//appending the section in nav
nav.appendChild(accordionElement);

//appending the h3 in section
accordionElement.appendChild(accordionElementChild);

co