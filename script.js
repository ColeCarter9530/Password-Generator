// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("You clicked the button!");
// ToDo:
// Password Length 8-128 characters
// Lowercase, Uppercase, numbers, special characters
// Validate the input
// Generate password

  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]
  const characterCodes = Array.from(Array(26)).map( (_, i) => i+97);
  const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
  const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())

  const generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) => {
    const availableCharacters = [
      ...(hasNumbers ? numbers : []),
      ...(hasSymbols ? symbols : []),
      ...(hasLowercase ? lowercaseLetters : []),
      ...(hasUppercase ? uppercaseLetters : []),
    ]
  }
  console.log(availableCharacters);

    return "generated password will go here"
}
generatePassword(12, true, true, true, true);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
