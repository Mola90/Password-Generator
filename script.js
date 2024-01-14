// Assignment code here
var length = 0;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var specialChar = false;

var charOptions = "abcdefghijklmnopqrstuvwxyz";
var numberOptions = "0123456789";
var specialOptions = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

length = window.prompt("Please choose a password length betwwen 8 and 128");
lowerCase = window.confirm("Would you like to include lower case letters?");
upperCase = window.confirm("Would you like to include Uppercase letters?");
numbers = window.confirm("Would you like your password to include numbers?");
specialChar= window.confirm("Would you like your password to include special characters?");


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

