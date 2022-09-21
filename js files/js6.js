// selecting and storing the element
let input = document.querySelector('.searchinput___19uW0');

// adding an event listener to listen the hover event and make the bg = red
input.addEventListener('mouseenter',() => {
    input.style.backgroundColor = 'red';
})

// adding an event to give the input it's default color after the hover is over
input.addEventListener('mouseleave',() => {
    input.style.backgroundColor = 'white';
})

