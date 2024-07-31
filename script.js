function prozent(){
    const a = document.getElementById("inputA").value;
    const b = document.getElementById("inputB").value;
    const d = document.getElementById("days").value; 

    //Calculations and Results
    const p = 100 * b / a; 
    const dp = p - 100; 
    const apy = dp * 365 / d; 
    
    document.getElementById("bofA").innerHTML = "B % of A = " + roundToTwo(p) + "%"; 
    document.getElementById("bminusA").innerHTML = "% difference between B and A = " + roundToTwo(dp) + "%";
    document.getElementById("apy").innerHTML = "APY " + roundToTwo(apy) + "%";
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

