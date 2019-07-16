class Animal {
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Human {
    constructor(first, last, age) {
        Animal.apply(this, arguments);
        this.genus = 'homo';
    }
    speak() {
        return `My name is ${this.name()}`;
    }
}
        Human.prototype = Object.create(Animal.prototype);
        Human.prototype.constructor = Human;

class Dog {
    constructor(first, last, age) {
        Animal.apply(this, arguments);
        this.genus = 'canis';
    }
    speak() {
        return 'woof woof woof';
    }
}
        Dog.prototype = Object.create(Animal.prototype);
        Dog.prototype.constructor = Dog;
