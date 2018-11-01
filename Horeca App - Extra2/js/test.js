const frisPrijs = 2.50;
const bierPrijs = 3.00;
const wijnPrijs = 3.50;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;

var aantalSchalen8 = 0;
var aantalSchalen16 = 0;

var aantalsnack8 = 0;
var aantalsnack16 = 0;

var type;
var amount;


function order() {
    while (type != 'stop') {
        type = prompt('kies uit: fris---bier---wijn.');
        amount = parseInt(prompt('Voer het aantal in dat je wilt bestellen.'));

        if (type == 'stop' || amount == 'stop') {
            totalAmound()
        }
        else if (type == 'fris') {
            aantalFris = aantalFris + amount;
        }

        else if (type == 'bier') {
            aantalBier = aantalBier + amount;
        }

        else if (type == 'wijn') {
            aantalWijn = aantalWijn + amount;
        }
        else {
            alert("Uw kan dit niet bestellen.");
        }
        console.log(amount, type);
    }
}

function snack() {
    aantalsnack = parseInt(prompt('Wilt u 8 of 16 bitterballen bestellen?'));
    if (aantalsnack == '8') {
        aantalsnack8 = aantalsnack + aantalsnack8;
        aantal = parseInt(prompt('Hoeveel schalen wilt u bestellen?'));
        aantal8 = aantal8 + aantal;
        bestelling();
    }
    else if (aantalsnack == '16') {
        aantalsnack16 = aantalsnack + aantalsnack16;
        console.log(aantalsnack16);
        aantal = parseInt(prompt('Hoeveel schalen wilt u bestellen?'));
        aantal16 = aantal16 + aantal;
        bestelling();
    }

    else {
        alert('Je kunt alleen kiezen tussen 8 of 16 snacks!');
        snack();
    }
}
// function addToOrder(type, amount) {
//     console.log(amount * type);
//     // getelement(type).innerhtml(amount * productprice);

// }

function totalAmound() {
    console.log('Aantal Fris' + aantalFris);
    console.log(aantalFris * frisPrijs);
    document.write('Aantal Fris' + aantalFris + '<br>');
    document.write(aantalFris * frisPrijs + '<br>');

    console.log('Aantal Bier' + aantalBier);
    console.log(aantalBier * bierPrijs);
    document.write('Aantal Bier' + aantalBier + '<br>');
    document.write(aantalBier * bierPrijs + '<br>');

    console.log('Aantal Wijn' + aantalWijn);
    console.log(aantalWijn * wijnPrijs);
    document.write('Aantal Wijn' + aantalWijn + '<br>');
    document.write(aantalWijn * wijnPrijs + '<br>');
}