// Email Validation using and operator

// You have already completed the email validation program using "||" operator.

// Now modify the code and rewrite the conditions to validate the email using the "&&" operator.



// Objectives

// Additionally, include one more condition that:
// Email  should have at least 3 characters before “@.”
// If the email is valid then store the value of email in the result variable with a message.


function main(email){
  
    let result;
  
    let atindex = email.indexOf("@");
  
    let dotindex = email.lastIndexOf(".");
  
    let len = email.length;
  
    if (atindex >= 3 && dotindex - atindex >= 4 && len - dotindex - 1 >= 2) {
      
            result = "Welcome " + email + " to our site";
    } else {
            result = "invalid email";
    }
    return result;
}
