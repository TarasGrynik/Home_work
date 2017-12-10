function numeric() {
    var euros = prompt("Please enter quantity euros");
    var dollars = prompt("Please enter quantity dollars");

    var convEuros = euros * 31.962;
    var convDollars = dollars * 27.109;

    var roundDol = convDollars.toFixed(3);
    var roundEur = convEuros.toFixed(3);

    if (!isNaN(parseFloat(euros)) && isFinite(euros) && !isNaN(parseFloat(dollars)) && isFinite(dollars) && Math.sign(dollars) !== -1 && Math.sign(euros) !== -1) {

       return alert(euros + " euros are equal " + roundEur + " grns, " + dollars + " dollars are equal " + roundDol + " grns, " + " one euro is equal " + 1.17 + " dollars.");

    } else {
        alert("Enter correct data!");
        numeric();
    }
}

numeric();




