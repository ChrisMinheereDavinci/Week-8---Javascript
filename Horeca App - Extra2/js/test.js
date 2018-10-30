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
    var amount = parseInt(prompt('Voer het aantal Fris in dat je wilt bestellen.'));
    
    console.log(amount, type);

    if (type == 'fris') {
        aantalFris = aantalFris + amount;
        addToOrder('fris', amount);
    }

    if (type == 'bier') {
        addToOrder('bier', amount);
    }

    if (type == 'wijn') {
        addToOrder('wijn', amount);
    }
}


function addToOrder(type, amount) {
    console.log(amount * type);
    // getelement(type).innerhtml(amount * productprice);

}

function totalAmound() {

}