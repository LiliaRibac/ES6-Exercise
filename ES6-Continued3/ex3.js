
let arr = [ ["Andrew", "Siemer",  42, "andy@inventive.io",78621],
            ["James","Shaw", 45, "james@inventive.io", 78754],
            ["Miguel","Gonzalez", 44, "miguel@inventive.io", 78745]];

let str1 = "";
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (j!=arr[i].length -1) {
            str1 += arr[i][j] + "," + " ";
        }
        else{
            str1 += arr[i][j];    
        }
    }
    if (i!=arr.length-1) {
        str1 += "; ";
    }
  };
console.log(str1);