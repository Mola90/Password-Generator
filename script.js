// Assignment code here
var length = 0;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var specialChar = false;
var acceptableLenght = false;
var password = " ";

var charOptions = "abcdefghijklmnopqrstuvwxyz";
var numberOptions = "0123456789";
var specialOptions = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

length = window.prompt("Please choose a password length betwwen 8 and 128");
lowerCase = window.confirm("Would you like to include lower case letters?");
upperCase = window.confirm("Would you like to include Uppercase letters?");
numbers = window.confirm("Would you like your password to include numbers?");
specialChar= window.confirm("Would you like your password to include special characters?");

var checklength = function(){
if (length => 8 && length <= 128)
    {
      acceptableLenght = true;

    }
else
    {
      window.alert("You have not chosen an accpetable password length");
      length = window.prompt("Warning! you have not chosen a an acceptable password. Enter a number beteen 8 and 128");
      checklength();


    }};


if (lowerCase || upperCase || numbers || specialChar && acceptableLenght)
{
//generate password
}


function shuffleArray(array) {
  return array.sort(function() {
       return Math.random() - 0.5;
  })};


function generatePassword()
  {
    if(lowerCase)
    {
      password = password + charOptions;
    }

    if(upperCase)
    { 
      password = password + charOptions.toUpperCase(); 
    }

    if(numbers)
    {
      password = password + numberOptions;
    }

    if(specialChar)
    {
      password = password + specialOptions;
    }   

    passwordArray = password.split("");

    console.log(shuffleArray(passwordArray));

    
  }

  generatePassword();



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

