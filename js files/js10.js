
let element = document.querySelector('a.btn-cta-big span.login-btn-text');

element.addEventListener('mouseenter', () => element.style.backgroundColor = 'red')
element.addEventListener('mouseleave', () => element.style.backgroundColor = 'inherit')

