function prozent(){
    //Input
    const a = document.getElementById("initialValue").value;
    const b = document.getElementById("currentValue").value;
    const d = document.getElementById("numberOfDays").value; 

    //Calculations
    const p = 100 * b / a; 
    const dp = p - 100; 
    const apy = dp * 365 / d; 
    
    //Output
    document.getElementById("currentValuePercent").innerHTML = "Current value = " + roundToTwo(p) + "%"; 
    document.getElementById("changePercent").innerHTML = "Change = " + roundToTwo(dp) + "%";
    document.getElementById("apy").innerHTML = "APY = " + roundToTwo(apy) + "%";
}

//Rounding a number n to two decimal places
function roundToTwo(n) {
    return +(Math.round(n + "e+2")  + "e-2");
}

