// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersArr = "1234567890";
var letterArr = "abcdefghijklmnopqrstuvwxyz";
var capitalLetterArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacterArr = "!@#$%^&*()-=+";

var characterLength = prompt("How many characters would you like...between 8 characters and 128 characters?");
var upperCase = confirm("Would you like upper case characters in your password?");
var lowerCase = confirm("Would you like lower case characters in your password?");
var numbers = confirm("Would you like numbers in your password?");
var specialCharacter = confirm("Would you like special characters in your password");

// Write password to the #password input
function generatePasswordOptions() {
  console.log("test");
  //defining the character length
  if(isNaN(characterLength)=== true){
    alert("You must enter a number");
    return;
  };

  if(characterLength < 8) {
    alert("password  length must be at least eight characters");
     return;
  };
  if(characterLength > 128 ) {
    alert("password length cannot be over 128 characters");
     return;
  };
  var passwordCriteria = {
    characterLength: characterLength,
    upperCase:upperCase,
    lowerCase:lowerCase,
    numbers:numbers,
    specialCharacter:specialCharacter,
  }
  console.log(passwordCriteria);
  return passwordCriteria;
}
function createPassword() {
 var options = generatePasswordOptions();
 var passwordArr = [];
 var possibleCharacters = [];
 var charactersChoosen = [];
 if(options.upperCase){
  console.log(options.upperCase);
  possibleCharacters = possibleCharacters.concat(capitalLetterArr)
  console.log(possibleCharacters, "characters")
  //push into the charactersChoosen array with the random characters
  
 };
}
//Random function generator using math.floor and math.random to return random characters for array, 
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
