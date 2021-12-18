// let fido = {
//     name: "Fido",
//     age: 4,
//     weight: 15,
//     breed: "mix",
//     bark: function () {
//         alert(this.name + ': ' + "Гав!");
//     },
// };
// let flyffy = {
//     name: "Flyffy",
//     age: 2,
//     breed: "mix",
//     bark: function () {
//         alert(this.name + ': ' + "Гав!");
//     },
// };
// fido.bark();
// flyffy.bark();
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.speed = 0;
    this.bark = function() {
        if (this.weight < 25) {
            alert(this.name +": " + "тяв!");
        }
        else {
            alert(this.name +": " + "гав!");
        }
    };
    this.start = function () {
        this.speed = 1;
        alert("Скорость " + this.name + ": "+ this.speed);
    };
    this.changeSpeed = function (coef) {
        this.speed = coef;
    };
    this.showSpeed = function () {
        alert("Скорость " + this.name + ": "+ this.speed);
    };
}

let fido = new Dog("Fido", "Mixed", 38);
let gav = new Dog("Gav", "African", 15);
let myrzik = new Dog("Myrzik", "Japanise", 24);

let dogs = [fido, gav, myrzik];
let coef;
for (i = 0; i < dogs.length; i++) {
    alert(dogs[i].name);
    dogs[i].bark();
    dogs[i].start();
    coef = +prompt("Введите скорость:");
    dogs[i].changeSpeed(coef);
    dogs[i].showSpeed();
}