
const chineseInput = document.getElementById("chinese");
const englishInput = document.getElementById("english");
const mathInput = document.getElementById("math");
const submitInput = document.getElementById("submitBtn");
const form = document.getElementById("myForm");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");

console.log(window);
console.log('chineseInput typeof is');
console.log(typeof (chineseInput));

resetBtn.addEventListener("click", function (e) {

    chineseInput.value = 0;
    englishInput.value = 0;
    mathInput.value = 0;
    resultDiv.innerText = "";
}
);

submitInput.addEventListener("click", function (e) {
    e.preventDefault();
    // confirm("是否要送出表單");
    if (!confirm("submit?")) {
        return false;
    }
    // ↑這樣按取消它才不會繼續送出資料

    // 要先抓到資料才能落入以下防呆判斷式
    const chinese = parseInt(chineseInput.value);
    const english = parseInt(englishInput.value);
    const math = parseInt(mathInput.value);

    if (chinese > 100 || english > 100 || math > 100) {
        alert('請輸入0~100');
        return false;
    }


    // const chinese = parseInt(chineseInput.value);
    // const english = parseInt(englishInput.value);
    // const math = parseInt(mathInput.value);

    let sum = chinese + english + math;

    let avg = Math.round(sum / 3 * 100) / 100;
    console.log("avg", avg);

    let level;
    let color = "secondary";

    if (avg >= 90) {
        level = "A"
        color = "success";
    } else if (avg >= 80) {
        level = "B"
    } else if (avg >= 70) {
        level = "C"

    } else if (avg >= 60) {
        level = "D"

    } else {
        level = "E"
        color = "danger";
    }

    console.log("level", level);
    console.log("color", color);


    // 為什麼用錢錢及大括號
    // 為什麼用上引號

    const result =
        `<div class="alert alert-${color}" role="alert" id="resultOutput">
國文:${chinese}<br>
英文:${english}<br>
數學:${math}<br>
總分:${sum}<br>
平均:${avg}<br>
成績判定:${level}<br>
</div>`;

    // 為什麼不用innertext?
    resultDiv.innerHTML = result;

});








