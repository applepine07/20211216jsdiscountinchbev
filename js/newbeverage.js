
const myForm = document.getElementById("myForm");
const kafemoney = document.getElementById("kafemoney");
const kafecup = document.getElementById("kafecup");
const flowermoney = document.getElementById("flowermoney");
const flowercup = document.getElementById("flowercup");
const tapiocamoney = document.getElementById("tapiocamoney");
const tapiocacup = document.getElementById("tapiocacup");
const resultDiv = document.getElementById("result");

console.log(window);
console.log('chineseInput typeof is');
console.log(typeof (chineseInput));



myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 要先抓到資料才能落入以下防呆判斷式
    const kafemoneyt = parseInt(kafemoney.value);
    const flowermoneyt = parseInt(flowermoney.value);
    const tapiocamoneyt = parseInt(tapiocamoney.value);
    const kafecupt = parseInt(kafecup.value);
    const flowercupt = parseInt(flowercup.value);
    const tapiocacupt = parseInt(tapiocacup.value);

    // const chinese = parseInt(chineseInput.value);
    // const english = parseInt(englishInput.value);
    // const math = parseInt(mathInput.value);

    let sum = (kafemoneyt * kafecupt) + (flowermoneyt * flowercupt) + (tapiocamoneyt * tapiocacupt);
    let cups = (kafecupt + flowercupt + tapiocacupt);

    const result =
        `<div class="alert alert-primary" role="alert" id="resultOutput">
總金額:${sum}<br>
總杯數:${cups}<br>
</div>`;

    // 為什麼不用innertext?
    resultDiv.innerHTML = result;

});








