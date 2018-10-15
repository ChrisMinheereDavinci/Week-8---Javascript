document.write('10 + 12 = ' + add(10, 12) + '<br>');
document.write('58 - 34 = ' + sub(58, 34) + '<br>');
document.write('6 x 7 = ' + mul(6, 7) + '<br>');
document.write('144 : 12 = ' + div(144, 12) + '<br>');
document.write('12 + 1 = ' + inc(12) + '<br>');
document.write('34 - 1 = ' + dec(34) + '<div>');



function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function mul(number1, number2) {
    return number1 * number2;
}

function div(number1, number2) {
    return number1 / number2;
}

function inc(number1) {
    return number1 + 1;
}

function dec(number1) {
    return number1 - 1;
}




