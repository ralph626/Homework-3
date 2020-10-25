// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var numbers = "1234567890";
var special = "!@#$%^&*()_+{}][:;<>/";
var allowedChar = "";
// Write password to the #password input
function writePassword() {
  // alert("btn clicked!")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//we need to write a generatePassword function
//ask users how many characters, if they want upper, lower, numbers, special characters in the password
function generatePassword(){
  allowedChar = "";
 var length = prompt("Enter a number for the length of your password");
  var upper = confirm("do you want upper case?");
  var lower = confirm("do you want lower case?");
  var num = confirm("do you want numbers case?");
  var spal = confirm("do you want special characters case?"); 

if (upper) {
  allowedChar = upperCase + allowedChar;
}

if (lower) {
  allowedChar = lowerCase + allowedChar;
}

if (num) {
  allowedChar = numbers + allowedChar;
}

if (spal) {
  allowedChar = special + allowedChar;
}

var finalPassword = ""
//get random character from list Math.random() returns number between 0-1, we want random between 0 and allowChar.length -1
while(length>finalPassword.length){
  var randomIndex = Math.floor(Math.random()*allowedChar.length);
  var char = allowedChar[randomIndex];
  finalPassword = finalPassword + char;
}


  //return the random password after its generated
  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
