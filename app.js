var sPP = document.querySelector("#input-spp");
var sPQ = document.querySelector("#input-spq");
var cMP = document.querySelector("#input-cmp");
var calcBtn = document.querySelector("#calc-btn");
var outputDiv = document.querySelector("#output");

calcBtn.addEventListener("click", calculate);

function calculate() {

    var totalPP = sPP.value * sPQ.value;
    var totalCrntValue = sPQ.value * cMP.value;
    var finalCalc = totalCrntValue - totalPP;
    var finalCalcPerc = (finalCalc / totalPP) * 100;
    finalCalcPerc = parseFloat(finalCalcPerc).toFixed(2);

    if (finalCalc === 0) {
        var finalSatus = "Nothing";
        outputDiv.innerHTML = "🤷🏻 You gained " + finalCalcPerc + "%" + "<br />" + "Your total profit is ₹" + finalCalc + "<br />" + "As they say having not made any profit is also a kind of loss!! Sorry ☹️";
    } else {
        if (finalCalc > 0) {
            var finalStatus = "Profit";
            outputDiv.innerHTML = "Yay!! 💃🏻🥳 " + "<br />" + "You gained " + finalCalcPerc + "%" + "<br />" + "Your total profit is ₹" + finalCalc + "<br />" + "Great pick!";
        } else {
            var finalStatus = "Loss";
            finalCalcPerc = finalCalcPerc - 2 * finalCalcPerc;
            finalCalc = finalCalc - 2 * finalCalc;
            outputDiv.innerHTML = "Uh-Oh! Sorry 😢😔 " + "<br />" + "You lost " + finalCalcPerc + "%" + "<br />" + "Your total loss is ₹" + finalCalc + "<br />" + "Better luck next time!";
        }
    }

}