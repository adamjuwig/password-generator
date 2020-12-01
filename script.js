
  // Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays and variables
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var confirmLength = "";
var chooseLowercase;
var chooseUppercase;
var chooseNumbers;
var chooseSpecial;
var userPassword = [];

// Function to confirm password length
function generatePassword() {
  confirmLength = (prompt("How long will your password be? It must be between 8 - 128 characters"));
  if (confirmLength < 8 != confirmLength > 128)
  confirmLength = (prompt("Please enter between 8 - 128 characters"));
// Confirm character specification
 chooseLowercase = prompt("Would you like to use lowercase characters?");
 chooseUppercase = confirm("Would you like to use uppercase characters?");
 chooseNumbers = confirm("Would you like to use numbers?");
 chooseSpecial = confirm("Would you like to use special characters?");

// if statement to confirm users choice
var userChoice = [];
if (chooseLowercase) {
  userChoice = userChoice.concat(lowercaseCharacters)
}
if (chooseUppercase) {
  userChoice = userChoice.concat(uppercaseCharacters)
}
if (chooseNumbers) {
  userChoice = userChoice.concat(numberCharacters)
}
if (chooseSpecial) {
  userChoice = userChoice.concat(specialCharacters)
}
 console.log(userChoice)
// Loop to determine variables for password input
  var userPassword = ""
  for (var i = 0; i < confirmLength; i++) {
    userPassword = userPassword + userChoice[Math.floor(Math.random() * userChoice.length)];
    password = userPassword;
    }
    return userPassword;
  }   
 
// Function to write password to text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










  










