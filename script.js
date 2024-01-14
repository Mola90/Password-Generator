// Assignment code here
var length = 0;
var lowerCase = false;
var lowerCase = false;
var numbers = false;
var specialChar = false;

var charOptions = "abcdefghijklmnopqrstuvwxyz";
var numberOptions = "0123456789"
var specialOptions = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

