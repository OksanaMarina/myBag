"use strict";
const grq = 50;
if (grq < 49){
    console.log('Error');
} else if (grq > 100){
    console.log('Error');
} else {
    console.log(grq);
}
(grq === 50) ? console.log('Ok!') : console.log('Error');

switch (grq) {
    case 49:
        console.log('Хи-хи!');
    break;
    case 100:
        console.log('Тоже не пойдет!');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не вышло)');
}

