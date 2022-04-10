const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const mm = document.getElementById("mm");
const ping = document.getElementById("ping");
const cmErr = document.getElementById("cmErr");


// parseIntNum1 = parseInt(num1.value);

num1.addEventListener("change", function (e) {
    console.log(e);
    const parseIntNum1 = parseFloat(num1.value);
    console.log(parseIntNum1);
    // e.preventDefault();
    // alert(num1.value);
    let cal = Math.round((parseIntNum1 / 2.54) * 100) / 100;
    console.log(cal);

    // cal = (parseIntNum1 * 2.54);
    // two=cal.toFixed(2);
    // console.log(two);

    // num2.value = two;
    // console.log(cal);
    num2.value = cal;

    if(isNaN(cal)){
        cmErr.innerText="請數入數字";
    }

});

num2.addEventListener("change", function (e) {
    console.log(e);
    const parseIntNum2 = parseFloat(num2.value);
    console.log(parseIntNum2);
    // e.preventDefault();
    // alert(num1.value);
    let calc = Math.round((parseIntNum2 * 2.54) * 100) / 100;
    console.log(calc);

    // cal = (parseIntNum1 * 2.54);
    // two=cal.toFixed(2);
    // console.log(two);

    // num2.value = two;
    // console.log(cal);
    num1.value = calc;

});


mm.addEventListener("change", function (e) {
    console.log(e);
    const parseIntmm = parseFloat(mm.value);
    console.log(parseIntmm);
    // e.preventDefault();
    // alert(num1.value);
    let calm = Math.round((parseIntmm / 3.30579) * 100) / 100;
    console.log(calm);

    // cal = (parseIntNum1 * 2.54);
    // two=cal.toFixed(2);
    // console.log(two);

    // num2.value = two;
    // console.log(cal);
    ping.value = calm;

});

ping.addEventListener("change", function (e) {
    console.log(e);
    const parseIntping = parseFloat(ping.value);
    console.log(parseIntping);
    // e.preventDefault();
    // alert(num1.value);
    let calp = Math.round((parseIntping * 3.30579) * 100) / 100;
    console.log(calp);

    // cal = (parseIntNum1 * 2.54);
    // two=cal.toFixed(2);
    // console.log(two);

    // num2.value = two;
    // console.log(cal);
    mm.value = calp;

});

