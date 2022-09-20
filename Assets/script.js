// Assignment Code
var generateBtn = document.querySelector("#generate");
let Upperselect
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  let selection= window.prompt("length of password min 8 max 128");
  
console.log(selection); 
if(selection < 8 || selection > 128 ){
  window.alert("slesct a number in range")
} else{window.alert("your password will be " + selection + " charecter long ");}


}



                                                       
