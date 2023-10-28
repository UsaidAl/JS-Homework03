// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random password based on user input
function generatePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = parseInt(prompt("Enter password length (8-128 characters):"));

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  // Generate the password based on selected criteria
  var password = generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  passwordText.value = password;
}

const numericChars = "0123456789";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!£$%^&*()_-=+#@?";

// Function to generate a random password based on criteria
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var validChars = "";

  if (includeLowercase) {
    validChars += lowercaseChars;
  }
  if (includeUppercase) {
    validChars += uppercaseChars;
  }
  if (includeNumeric) {
    validChars += numericChars;
  }
  if (includeSpecial) {
    validChars += specialChars;
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  return password;
}

// Function to write the generated password to the #password input
function writePassword() {
  generatePassword();
}

console.log(generateBtn);

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);