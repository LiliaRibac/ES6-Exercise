var str = '"Andrew", "Siemer", 42, "andy@inventive.io", 78621; "James", "Shaw", 45, "james@inventive.io", 78754; "Miguel", "Gonzalez", 44, "miguel@inventive.io", 78745'
str = str.replace(/ /g, "");
str = str.replace(/"/g, "");

var result = str.split(";").map(e => e.split(','));


console.log(result);