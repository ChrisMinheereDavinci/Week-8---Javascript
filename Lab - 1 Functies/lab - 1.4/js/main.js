/*var som = prompt('voer getal in !');

function mul() {
    for (var a = 0; a < som; a++) {

        for (var b = 1; b <= 10; b++) {
            document.write(som + ' x ' + b + ' = ' + b * som + '<br>');

        }
        document.write('<br>');
        mul();
        som++;
    }
}

mul();



var tafel = prompt('Voer een getal in:');

function tafels() {

    for (var i = 0; i < tafel; i++) {

        for (var j = 0; j <= 10; j++) {

            document.write(tafel + ' x ' + j + ' = ' + j * tafel + '<br/>');
        }
        document.write('<br/>');
        tafel++;
        tafels();


    }
}
tafels();
*/


var tafel = prompt('Kies een tafel')

function tafels() {
    for (var i = 0; i < tafel; i++) {
        for (var b = 1; b <= 10; b++) {
            document.write(b + ' x ' + tafel + ' = ' + tafel * b + '<br>')
        }
        document.write('<br>')
        tafel--
        tafels();
    }
}
tafels();