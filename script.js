// Assignment code here
var length = 0;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var specialChar = false;
var acceptableLenght = false;
var password = "";
var generateBtn = document.querySelector("#generate");

var charOptions = "abcdefghijklmnopqrstuvwxyz";
var numberOptions = "0123456789";
var specialOptions = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

function questions()
{
  length = window.prompt("Please choose a password length betwwen 8 and 128");
  lowerCase = window.confirm("Would you like to include lower case letters?");
  upperCase = window.confirm("Would you like to include Uppercase letters?");
  numbers = window.confirm("Would you like your password to include numbers?");
  specialChar= window.confirm("Would you like your password to include special characters?");
};

function checklength(){
if ((length >= 8) && (length <= 128))
    {
      
      console.log("length true");
      return true;
      
    }
else
    {
      // length = window.prompt("Warning! you have not chosen a an acceptable password. Enter a number beteen 8 and 128");
      console.log("length false");
      window.alert("YOU MUST CHOOSE A PASSWORD LENGTH BETWEEN 8 AND 128");


      return false;


    }
  };

function checkCriteria()
{
    if (lowerCase || upperCase || numbers || specialChar  )
    {
    return true;
    }
    else
    {
      window.alert("You have not select any criteria");
    }
};

  function shuffleArray(array) 
  {
      return array.sort(function() 
      {
          return Math.random() - 0.5;
      })
  };


function generatePassword()
  {
    questions();
    if (checkCriteria() && checklength())
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

        passwordArray= shuffleArray(passwordArray);
        passwordArray= passwordArray.slice(0,length);

        var newPassword = passwordArray.join("");
        console.log(newPassword);
        document.querySelector("#password").value= newPassword;
      }   
  }

  



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",generatePassword);

