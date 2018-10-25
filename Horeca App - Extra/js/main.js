// Made By: Chris Minheere 
// 18-10-2018
// Horeca App

// Bronnen:
// W3School.com
//stackoverflow.com

const fris = 2.50;
const bier = 3.00;
const wijn = 3.50;

const snack8 = 6.50;
const snack16 = 12.5;

var aantalSnack = 0;
var aantalSchalen = 0;

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;

var totaalFris = 0;
var totaalBier = 0;
var totaalWijn = 0;

var totaalSnack = 0;

var totaalPrijs = 0;


function addToOrder() {
    var keuze = prompt('Place Order____kies uit: firs---bier---wijn---snack'); //prompt asks for a drink
    if (keuze == "fris") {
        aantalFris = parseInt(prompt('Voer het aantal Fris in dat je wilt bestellen.')); //prompt asks the amound of drinks
        console.log(aantalFris);
        console.log(totaalFris);
        document.getElementById("aantalFris").innerHTML = (aantalFris);
        document.getElementById("prijsAantalFris").innerHTML = ("€" + aantalFris * fris + "<hr>");
        totaalFris = aantalFris * fris; //calculates the total price and stores it in a 'Var' called 'totaalFris'
        addToOrder();
    }

    else if (keuze == "bier") {
        aantalBier = parseInt(prompt('Voer het aantal Bier in dat je wilt bestellen.')); //prompt asks the amound of drinks
        console.log(aantalBier);
        console.log(totaalBier);
        document.getElementById("aantalBier").innerHTML = (aantalBier);
        document.getElementById("prijsAantalBier").innerHTML = ("€" + aantalBier * bier + "<hr>");
        totaalBier = aantalBier * bier; //calculates the total price and stores it in a 'Var' called 'totaalBier'
        addToOrder();
    }

    else if (keuze == "wijn") {
        aantalWijn = parseInt(prompt('Voer het aantal Wijn in dat je wilt bestellen.'));//prompt asks the amound of drinks
        console.log(aantalWijn);
        console.log(totaalWijn);
        document.getElementById("aantalWijn").innerHTML = (aantalWijn);
        document.getElementById("prijsAantalWijn").innerHTML = ("€" + aantalWijn * wijn + "<hr>");
        totaalWijn = aantalWijn * wijn; //calculates the total price and stores it in a 'Var' called 'totaalWijn'
        addToOrder();
    }

    else if (keuze == "snack") {
        snack1();
    }

    else if (keuze == "stop" || keuze == "nee") { //interrupts the program with the word 'stop' or 'nee'
        alert("bestelling is geplaatst.");
        totaalPrijs = totaalFris + totaalBier + totaalWijn + totaalSnack; //calculated the total amount
        document.write("<hr>");
        document.getElementById("totaalPrijs").innerHTML = ("€" + totaalPrijs);
    }
    else { //shows an allert when an unexpected value is entered, then returns to the beginning of the function.
        alert("Uw kan dit niet bestellen.");
        addToOrder();
    }
}

function snack1() {
    var aantalSnack = parseInt(prompt('Kies het aantal snacks. 8 of 16')); //prompt asks for snacks
    if (aantalSnack == "8") {
        aantalSchalen = parseInt(prompt("Aantal schalen?"));
        totaalSnack = aantalSchalen * snack8; //calculates the total price and stores it in a 'Var' called 'totaalSnack'
        console.log(aantalSnack);
        console.log(totaalSnack);
        document.getElementById("aantalSnack").innerHTML = ("Aantal Snack's  " + aantalSnack);
        document.getElementById("aantalSchalen").innerHTML = ("Aantal snack schalen  " + aantalSchalen);
        document.getElementById("totaalSnack").innerHTML = ("€" + totaalSnack);
        addToOrder();
    }

    else if (aantalSnack == "16") {
        aantalSchalen = parseInt(prompt("Aantal schalen?"));
        totaalSnack = aantalSchalen * snack16; //calculates the total price and stores it in a 'Var' called 'totaalSnack'
        console.log(aantalSnack);
        console.log(totaalSnack);
        document.getElementById("aantalSnack").innerHTML = ("Aantal Snack's  " + aantalSnack); //stores the value in an 'Id'
        document.getElementById("aantalSchalen").innerHTML = ("Aantal snack schalen  " + aantalSchalen); //stores the value in an 'Id'
        document.getElementById("totaalSnack").innerHTML = ("€" + totaalSnack); //stores the value in an 'Id'
        addToOrder();
    }

    else { //shows an allert when an unexpected value is entered, then returns to the beginning of the function.
        alert("Uw kan dit niet bestellen.");
        snack1();
    }
}

addToOrder();