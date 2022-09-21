className = 'ico ico-call_v2 svg-icon';

let phoneNumber = document.querySelector('.one-tel-number')
phoneNumber.innerText = '+91 7697964525'

let icon = document.createElement('i')
icon.className = className;
phoneNumber.appendChild(icon)

phoneNumber.setAttribute('href', 'tel: +91 7697964525')