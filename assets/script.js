// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = parseInt(prompt("Enter password length (8-128 characters"))

  passwordText.value = password;

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
alert("Password must be between 8-128 characters");
return "";  

}

function generateRandomPassword(Length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbercharacters = "1234567890";
    var specialCharacters = "!£$%^&*()-_=+@?#";

    var validCharacters = "";

{

var password = ""

for (var i = 0; i < length; i++) {var randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);}
  }

  return password;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

console.log(generateBtn);
console.log(generateBtn + password);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
