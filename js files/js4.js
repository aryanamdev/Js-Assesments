// creating a classname, so we can give it to the icon later
className = 'ico ico-call_v2 svg-icon';

// grabbing phone number
let phoneNumber = document.querySelector('.one-tel-number')

// changing the phone Number value
phoneNumber.innerText = '+91 7697964525'

// creating the icon that is removed
let icon = document.createElement('i')
icon.className = className;
phoneNumber.appendChild(icon)

// changing the attribute so that it works irl
phoneNumber.setAttribute('href', 'tel: +91 7697964525')