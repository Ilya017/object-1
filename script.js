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
    this.bark = function() {
        if (this.weight < 25) {
            alert(this.name + "тяв!");
        }
        else {
            alert(this.name + "гав!");
        }
    };
}

let fido = new Dog("Fido", "Mixed", 38);
let gav = new Dog("Gav", "African", 15);
let myrzik = new Dog("Myrzik", "Japanise", 24);

let dogs = [fido, gav, myrzik];
for (i = 0; i < dogs.length; i++) {
    alert(dogs[i].name);
    dogs[i].bark();
}