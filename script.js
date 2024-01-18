// variables delcared
var length = 0;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var specialChar = false;
var acceptableLenght = false;
var password = "";
var generateBtn = document.querySelector("#generate");


// resets variables for new password
function reset()
{
  length = 0;
  lowerCase = false;
  upperCase = false;
  numbers = false;
  pecialChar = false;
  acceptableLenght = false;
  password = "";
}

// possible characters declared.

var charOptions = "abcdefghijklmnopqrstuvwxyz";
var numberOptions = "0123456789";
var specialOptions = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";


//ask user to choose selection critera
function questions()
{
  length = window.prompt("Please choose a password length betwwen 8 and 128");
  lowerCase = window.confirm("Would you like to include lower case letters?");
  upperCase = window.confirm("Would you like to include Uppercase letters?");
  numbers = window.confirm("Would you like your password to include numbers?");
  specialChar= window.confirm("Would you like your password to include special characters?");
};

// checks length of rquested password
function checklength(){
if ((length >= 8) && (length <= 128))
    {
      
      return true;
      
    }
else
    {
      window.alert("YOU MUST CHOOSE A PASSWORD LENGTH BETWEEN 8 AND 128");


      return false;


    }
  };

  // checks one or more criteria have been chosen for password
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

// generates password and assure password will be long enough
function generatePassword()
  {
    questions();
    if (checkCriteria() && checklength())
    {
        if(lowerCase)
        {
          for( var i =0; i < 15; i++)
          {
          password = password + charOptions;
          }
        }

        if(upperCase)
        { 
          for( var i =0; i < 15; i++)
          {
          password = password + charOptions.toUpperCase(); 
          }
          
        }

        if(numbers)
        {
          for( var i =0; i < 15; i++)
          {
          password = password + numberOptions;
          }
        }        

        if(specialChar)
        {
          for( var i =0; i < 15; i++)
          {
          password = password + specialOptions;
          }
        }   
    }
//creates an array and shuffles the charactes and re assembles
        passwordArray = password.split("");

        passwordArray= shuffleArray(passwordArray);
        passwordArray= passwordArray.slice(0,length);

        var newPassword = passwordArray.join("");
        console.log(newPassword);
        document.querySelector("#password").value= newPassword;
        reset();
         
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
