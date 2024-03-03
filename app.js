
let downButtonA = document.querySelector("#downButtonA");
let upButtonA = document.querySelector("#upButtonA");
let resetButton = document.querySelector("#reseTButtonA");
let downButtonB = document.querySelector("#downButtonB");
let upButtonB = document.querySelector("#upButtonB");
let resetButtonB = document.querySelector("#resetButtonB");
let conclusion = 0;
let conclusion2 = 0;


// TEAM A 

document.getElementById("changeTeamNameA").addEventListener("click", function () {
    let teamNameA = prompt("Takım Adı Giriniz.");
    const p = document.querySelector("#teamNameA");
    const p_text = p.innerHTML;
    p.innerHTML = teamNameA;
    //./img/team-photos/adanademir.png
    const imgPath = `./img/team-photos/${teamNameA}.png`;
    const img1 = document.getElementById("team-1-img").src = imgPath;
    // console.log(img1);
});

downButtonA.addEventListener("click", function () {
    const number =  document.querySelector("#scoreA").innerHTML;

    if(number > 0){
        document.querySelector("#scoreA").innerHTML = conclusion -= 1;
    }
});

upButtonA.addEventListener("click", function () {
    const number =  document.querySelector("#scoreA").innerHTML;

    if(number >= 0){
        document.querySelector("#scoreA").innerHTML = conclusion += 1;
    }
});

resetButtonA.addEventListener("click", function () {
    document.querySelector("#scoreA").innerHTML = conclusion = 0;
});

// TEAM B 
document.getElementById("changeTeamNameB").addEventListener("click", function () {
    let teamNameB = prompt("Takım Adı Giriniz.");
    const p = document.querySelector("#teamNameB");
    const p_text = p.innerHTML;
    p.innerHTML = teamNameB;
    //./img/team-photos/adanademir.png
    const imgPath = `./img/team-photos/${teamNameB}.png`;
    const img1 = document.getElementById("team-2-img").src = imgPath;
    // console.log(img1);
});

downButtonB.addEventListener("click", function () {
    const number2 =  document.querySelector("#scoreB").innerHTML;

    if(number2 > 0){
        document.querySelector("#scoreB").innerHTML = conclusion2 -= 1;
    }
});

upButtonB.addEventListener("click", function () {
    const number2 =  document.querySelector("#scoreB").innerHTML;

    if(number2 >= 0){
        document.querySelector("#scoreB").innerHTML = conclusion2 += 1;
    }
});

resetButtonB.addEventListener("click", function () {
    document.querySelector("#scoreB").innerHTML = conclusion2 = 0;
});