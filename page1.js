const remote = require('electron').remote
const main = remote.require('./index.js')
const db = remote.require('./dbfunc')

var button = document.createElement('button')
button.textContent = "Click me!"
button.addEventListener('click' ,() => {
	main.openWindow('page2')
	db.insertUser('pablo2','escobar2')
},false)

document.body.appendChild(button)