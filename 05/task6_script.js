'use strict';

let a = promt( "Введите номер квартиры");
let x;
if ( a >= 1 && a <= 20 ) {
    x = "Квартира находится в 1-ом подъезде.";
} else if ( a >= 21 && a <= 48 ) {
    x = "Квартира находится во 2-ом подъезде.";
} else if ( a >= 49 && a <= 90 ) {
    x = "Квартира находится в 3-ем подъезде.";
} else {
    x = "В этом доме квартиры с таким номером нет."
}
alert(x);