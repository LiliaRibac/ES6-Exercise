
let inputStr = '"First Name", "Last Name", "Age", "Email", "Zip Code";"Andrew", "Siemer", 42, "andy@inventive.io", 78621;"James", "Shaw", 45, "james@inventive.io", 78754;"Miguel", "Gonzalez", 44, "miguel@inventive.io, 78745'


class personObj {
    constructor(firstName, lastName, age, email, zipCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.zipCode = zipCode;
    }
}
let persons = new Array();


inputStr = inputStr.replace(/ /g, "");
inputStr = inputStr.replace(/"/g, "");

var result = inputStr.split(";").map(e => e.split(','));

for (let i = 1; i < result.length; i++) {
    let person = new personObj;
    person.firstName = result[i][0];
    person.lastName = result[i][1];
    person.age = result[i][2];
    person.email = result[i][3];
    person.zipCode = result[i][4];
    persons.push(person);
}


console.log(persons);