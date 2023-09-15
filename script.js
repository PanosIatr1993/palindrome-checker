function palindrome(str) {
  let newStr = str.split(/\W|_/g).join("");
  let string1 = "";
  let string2 = "";
  console.log(newStr);

  /*Two Loops that create String 1 and String 2(sorted) respectively, separating the original String argument into two halves*/
  for (let i = 0; i<=(newStr.length/2)-1; i++) {
    string1 += newStr[i];
  }
  for (let i = newStr.length-1; i>=newStr.length/2; i--) {
    console.log(string2 += newStr[i]);
  }

  /*Both String 1 and String 2 are turned to Upper Case*/
  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();
  console.log(string1);
  console.log(string2);


  /*Condition that checks if String 1 equals String 2*/
  if (string1==string2) {
    return true;
  }
  return false;
}

palindrome("eye");
