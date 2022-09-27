import {Zene} from  './zene.js';

window.onload = init();

const element = document.createElement('div');
element.innerHTML = "hello world";

function init(){
    console.log("lmao");
    const element = document.createElement('div');
element.innerHTML = "hello world";
    // document.getElementById("bekezdes").innerHTML = "lami";
    // document.getElementById("submitButton").addEventListener("click", bekuldes());
    
    function bekuldes(){
        let szamCim = document.getElementById("szamCim").value;
        let szamHossz = document.getElementById("szamHossz").value;
        zeneLista.push(new Zene(szamCim, szamHossz));
    
        console.log(zeneLista);
    }
}
