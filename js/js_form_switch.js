const form = document.getElementById("myForm");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const option = document.getElementById("option");
const resultOutput = document.getElementById("resultOutput");



form.addEventListener("submit", function (e) {

    console.log(e);
    e.preventDefault();
    // alert(num1.value);
    console.log(num1.value);
    console.log(num2.value);
    console.log(num3.value);

    parseIntNum1 = parseInt(num1.value); //原價
    console.log(parseIntNum1);


    parseIntNum2 = parseInt(num2.value); //折扣
    parseDiscount = parseFloat(num2.value / 100);
    console.log(parseDiscount);

    parseIntNum3 = parseInt(num3.value); //現金折抵
    console.log(parseIntNum3);

    // 因為num1和num2是object，所以不能運算，要加value


    // TR的解法
    // 全部的折扣=折扣+現金折抵
    let discountAll = 0;

    // >500 1.2 79 88=>0.79 0.88
    if (parseIntNum1 >= 500) {
        discountAll = parseIntNum1 * (1 - parseDiscount);
    }

    // >200現金折抵
    if (parseIntNum1 * parseDiscount >= 200) {
        discountAll = discountAll + parseIntNum3;
    }

    console.log(discountAll);
    alert(discountAll);
    resultOutput.innerText = "Result:恭喜你今天賺了" + discountAll;

    // 俺的解法一，原來我誤解TR的意思惹，是折扣後大於200才可以減現金折扣
    // total=0;
    // if (parseIntNum1 < 200) {
    //     total = parseIntNum1;
    // } else if (parseIntNum1 >= 200 && parseIntNum1 < 500) {
    //     total = Math.round((parseIntNum1 - parseIntNum3));
    // } else if (parseIntNum1 >= 500) {
    //     total = Math.round(((parseIntNum1 * parseIntNum2) / 100) - parseIntNum3);
    // }

    // console.log(total);


    // 偶的解法二，原來我誤解TR的意思惹，是折扣後大於200才可以減現金折扣
    // total = ((parseIntNum1 * parseIntNum2)/100)-parseIntNum3;
    // if (parseIntNum1 < 200) {
    //     parseIntNum3=0;
    // total = ((parseIntNum1 * parseIntNum2)/100)-parseIntNum3;
    // }
    // if (parseIntNum1 < 500) {
    //     parseIntNum2=0;
    //     total = (parseIntNum1-parseIntNum3);
    // }

    // alert(total);
    // resultOutput.innerText = "本次總共需付:" + total + "元";



});

