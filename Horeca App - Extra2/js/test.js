const frisPrijs = 2.50;
const bierPrijs = 3.00;
const wijnPrijs = 3.50;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;

var type;

//prompt('kies uit: fris---bier---wijn.');

while (type != 'stop') {
    type = prompt('kies uit: fris---bier---wijn.');
    if (type == 'stop') {
        totalAmound()
    }
    var amount = parseInt(prompt('Voer het aantal in dat je wilt bestellen.'));

    console.log(amount, type);


    if (type == 'fris') {
        aantalFris = aantalFris + amount;
    }

    if (type == 'bier') {
        aantalBier = aantalBier + amount;
    }

    if (type == 'wijn') {
        aantalWijn = aantalWijn + amount;
    }
    // else {
    //     prompt('dit is een incorete invoer');
    // }
}


function addToOrder(type, amount) {
    console.log(amount * type);
    // getelement(type).innerhtml(amount * productprice);

}

function totalAmound() {
    console.log('Aantal Fris' + aantalFris);
    console.log(aantalFris * frisPrijs);
    document.write('Aantal Fris' + aantalFris + '<br>');
    document.write(aantalFris * frisPrijs + '<br>');

    console.log('Aantal Bier' + aantalBier);
    console.log(aantalBier * bierPrijs);
    document.write('Aantal Bier' + '<br>');
    document.write(aantalBier * bierPrijs + '<br>');

    console.log('Aantal Wijn' + aantalWijn);
    console.log(aantalWijn * wijnPrijs);
    document.write('Aantal Wijn' + aantalWijn + '<br>');
    document.write(aantalWijn * wijnPrijs + '<br>');
}