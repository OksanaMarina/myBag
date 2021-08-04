"use strict";
const soldier = {
    helth: 400,
    armor: 500,
    sayHi: function () {
        console.log("Есть Сер!");
    }
}

const john = {
    helth: 100
}
john.__proto__= soldier;
console.log(john
);
john.sayHi();
