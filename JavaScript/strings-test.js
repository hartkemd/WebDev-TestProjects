var input = prompt("What is your name?");

var firstLetterOfName = input.slice(0,1);
firstLetterOfName = firstLetterOfName.toUpperCase();

var remainderOfName = input.slice(1,input.length);
remainderOfName = remainderOfName.toLowerCase();

var formattedName = firstLetterOfName + remainderOfName;
alert("Hello, " + formattedName + "!");
