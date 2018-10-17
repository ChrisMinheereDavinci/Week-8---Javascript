const fris = 2.50;
const bier = 3.00;
const wijn = 3.50;
var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;

var frisTotaal

function addToOrder() {
    var keuze = prompt('Place Order kies uit:     Fris---Bier---Wijn');
    if (keuze == "fris") {
        aantalFris = parseInt(prompt('Voer het aantal Fris in dat je wilt bestellen.'));
        var meer = prompt('Anders nog iets!');

        if (meer == "ja") {
            addToOrder();
        }
        else {
            print();
        }
    }
    if (keuze == "bier") {
        aantalBier = parseInt(prompt('Voer het aantal Bier in dat je wilt bestellen.'));
        var meer = prompt('Anders nog iets!');

        if (meer == "ja") {
            addToOrder();
        }
        else {
            print();
        }
    }
    if (keuze == "wijn") {
        aantalWijn = parseInt(prompt('Voer het aantal Wijn in dat je wilt bestellen.'));
        var meer = prompt('Anders nog iets!');

        if (meer == "ja") {
            addToOrder();
        }
        else{ 
            if (meer == "stop" || meer == "nee"){
                print();
            }
            else{
                alert('Ik heb je niet begrepen');
            }
        }
    }
}

function print() {
    console.log(aantalFris, aantalBier, aantalWijn);
    console.log(aantalFris * fris,  aantalBier * bier, aantalWijn * wijn);

    document.write("Fris:  " + aantalFris + "<br>" + "Bier:  " + aantalBier + "<br>" + "Wijn: " + aantalWijn + "<br>");
    document.write("€" + aantalFris * fris + "<br>" + "€" + aantalBier * bier + "<br>" + "€" + aantalWijn * wijn + "<br>");
}




addToOrder();

