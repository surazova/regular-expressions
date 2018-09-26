//FreeCodeCamp Regular Expressions 
//RegEx: Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);