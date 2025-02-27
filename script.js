window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
});

function elemekElerese1() {
    let elem = document.querySelectorAll("section h2")[0];
    document.getElementById("f1");
    let tartalom = elem.innerHTML
    
    console.log(tartalom);
}



function elemekElerese2() {
    let  eleres2 = document.querySelectorAll("#ide")[0]
    document.getElementById("ide");
    eleres2.innerHTML="<p>Jó reggelt!</p>"
}

function elemekElerese3(){
    let  eleres3 = document.querySelectorAll(".ide")[0]
    document.getElementsByClassName("ide");
    eleres3.innerHTML ="<p>Jó reggelt!</p>"
    
}

function elemekElerese4() {
    let txt = "<ul>"
    const eleres4 = document.getElementsByClassName("lista")[0];
    for (let i = 0; i < 5; i++) {
        let szam = (Math.random()*21)+ 10
        txt += `<li> ${Math.floor(szam)} </li>`
    }
    txt += "</ul>"
    eleres4.innerHTML= txt
}

function elemekFormazasa1() {
    const formaz1 = document.getElementsByClassName("lista")[0];
    formaz1.classList.add("formazott")
    formaz1.innerHTML= " ";
}