// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = confirm("Would you like upper case characters in your password?");
var lowerCase = confirm("Would you like lower case characters in your password?");
var numbers = confirm("Would you like numbers in your password?");
var specialCharacter = confirm("Would you like special characters in your password?");
var characterLength = prompt("How many characters would you like (between 8 characters and 128 characters)?");
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"]
var letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var capitalLetterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacterArr = ["!","@","#","$","%","^","&","*","(",")","-","=","+"]

function generatePassword(){
for (i = 0; i < characterLength; i++) {
  if (upperCase === true){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  else if (lowerCase === true){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
  else if (numbers === true){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }
  if (specialCharacter === true){
    return String.fromCharCode(Math.floor(Math.random() * 33) + 14)
  }
}
for (i = 0; i < characterLength; i++) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}
function validation() {
  if (characterLength.length < 8 || characterLength.length > 128) {
    return "Please enter valid length!"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);