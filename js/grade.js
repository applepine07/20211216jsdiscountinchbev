const myForm = document.getElementById("myForm");
const chinese = document.getElementById("chinese");
const english = document.getElementById("english");
const math = document.getElementById("math");
const resultBtn = document.getElementById("resultBtn");
const sum = document.getElementById("sum");
const avg = document.getElementById("avg");
const chineseg = document.getElementById("chineseg");
const englishg = document.getElementById("englishg");
const mathg = document.getElementById("mathg");
const chinesegrade = document.getElementById("chinesegrade");
const englishgrade = document.getElementById("englishgrade");
const mathgrade = document.getElementById("mathgrade");





// parseIntNum1 = parseInt(num1.value);

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    test=chineseg.class;
    console.log(chineseg.class);


    parseintchinese = parseInt(chinese.value);
    parseintenglish = parseInt(english.value);
    parseintmath = parseInt(math.value);

    console.log(parseintchinese);
    console.log(parseintenglish);
    console.log(parseintmath);

    console.log(typeof (parseintchinese));
    console.log(typeof (parseintenglish));
    console.log(typeof (parseintmath));

    sumgrade = (parseintchinese + parseintenglish + parseintmath);
    avggrade= Math.round((sumgrade/3)*100)/100;
    
    console.log(avggrade);
    console.log(typeof (avggrade));

    // 總分及平均
    sum.innerText = "總分為" + sumgrade;
    avg.innerText = "平均為" + avggrade;

// 中文 start

    if(parseintchinese>=90){
        chineseg.setAttribute('class', 'alert alert-success alert-dismissible fade show');      
    }else if(parseintchinese>=60 && parseintchinese<90){
        chineseg.setAttribute('class', 'alert alert-secondary alert-dismissible fade show');
    }else{
        chineseg.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    }

    if(parseintchinese>=90){
        chinesegrade.innerText="A";        
    }else if(parseintchinese>=80){
        chinesegrade.innerText="B";
    }else if(parseintchinese>=70){
        chinesegrade.innerText="C";
    }else if(parseintchinese>=60){
        chinesegrade.innerText="D";
    }else{
        chinesegrade.innerText="E";
    }

// 中文 end

// 英文 start

    if(parseintenglish>=90){
        englishg.setAttribute('class', 'alert alert-success alert-dismissible fade show');      
    }else if(parseintenglish>=60 && parseintenglish<90){
        englishg.setAttribute('class', 'alert alert-secondary alert-dismissible fade show');
    }else{
        englishg.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    }

    if(parseintenglish>=90){
        englishgrade.innerText="A";        
    }else if(parseintenglish>=80){
        englishgrade.innerText="B";
    }else if(parseintenglish>=70){
        englishgrade.innerText="C";
    }else if(parseintenglish>=60){
        englishgrade.innerText="D";
    }else{
        englishgrade.innerText="E";
    }

// 英文 end

// 數學 start


    if(parseintmath>=90){
        mathg.setAttribute('class', 'alert alert-success alert-dismissible fade show');
    }else if(parseintmath>=60 && parseintmath<90){
        mathg.setAttribute('class', 'alert alert-secondary alert-dismissible fade show');
    }else{
        mathg.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    }

    if(parseintmath>=90){
        mathgrade.innerText="A";        
    }else if(parseintmath>=80){
        mathgrade.innerText="B";
    }else if(parseintmath>=70){
        mathgrade.innerText="C";
    }else if(parseintmath>=60){
        mathgrade.innerText="D";
    }else{
        mathgrade.innerText="E";
    }

// 數學 end


    // console.log(chineseg.class);
    // console.log(typeof (chineseg.class));


});


