// array of possible password characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// creating the length of the password, can be changed here.
let passwordLength = 15
// creating variables to assign two passwords
let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

// function to choose a selection of numbers/characters from array above
function randomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// function and for loop to create a 15 no/char random password
// onclick button will deliver this function
function getPassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let character = randomCharacter()
        password += character         
    }
    return password
}

// function to render out the generated passwords to the two available fields.
function genPassword() {
    let passwordOne = getPassword()
    let passwordTwo = getPassword()
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}