const remote = require('electron')
const main = remote.require('index.js')

var button = document.createElement('button')
button.textContent = "Click me again!"
button.addEventListener('click' () => {
	main.openWindow('page1')
})

document.body.appendChild(button)