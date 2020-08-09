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
function writePassword() {}
  var passwordCriteria = "";
  var password = ""
 function generatePassword() {
  if (capitalLetterArr ===true){
    passwordCriteria = passwordCriteria + capitalLetterArr
  }
    if (letterArr ===true){
      passwordCriteria = passwordCriteria + letterArr
    }
    if (numbersArr===true){
      passwordCriteria = passwordCriteria + numbersArr;
    }
    if (specialCharacterArr ===true){
      passwordCriteria = passwordCriteria + specialCharacterArr;
    }
generatePassword();
for (i = 0; i < characterLength; i++) {
  password += passwordCriteria[Math.floor(Math.random() * characterLength)];
}
return password
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);