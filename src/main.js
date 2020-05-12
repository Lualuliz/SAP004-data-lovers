import data from './data/lol/lol.js';
import { orderByza } from './data.js';
import { orderByaz } from './data.js';
import { orderByhp } from './data.js';
import { orderBymp } from './data.js';
import { orderByarmor } from './data.js'

const lol = data.data

const lolList = document.getElementById("lol-list")


const renderLol = (lol) => {
    const template = document.getElementById("lol-template") //pegando a referencia no DOM
    const card = template.content.querySelector(".card")
    const championsName = card.querySelector(".name")
    const championsImage = card.querySelector(".img")
    const championsArmor = card.querySelector(".armor")
    const championsMP = card.querySelector(".MP")
    const championsHP = card.querySelector(".HP")

    championsName.textContent = lol.name //populando informacoes
    championsArmor.textContent = "Armor:" + lol.stats.armor
    championsMP.textContent = "MP:" + lol.stats.mp
    championsHP.textContent = "HP:" + lol.stats.hp
    championsImage.setAttribute("src", lol.img)
    const clonedTemplate = document.importNode(template.content, true)
    lolList.appendChild(clonedTemplate)

}
var resp = Object.keys(lol); //pegando as chaves do mapa para passar para a funcao

resp.forEach(element => {
    renderLol(lol[element]);
});
const clearChampionsList = () => {
    championsList.innerHTML = ""
}
const getOrder = () => { // para filtrar/ordenar de a-z/z-a
    let option = document.getElementById("sort").value;
    console.log(option);
    
    if(option == "z-a"){
        console.log("|Entrou");
        console.log(lolList.childNodes);
        lolList.innerHTML = "";
       let dados = orderByza();
       dados.forEach(element =>{
           renderLol(lol[element]);
       });

       console.log(dados);
    } else{ 
        lolList.innerHTML = "";
        let dados = orderByaz ();
        dados.forEach(element =>{
            renderLol(lol[element]);
        });
    }
}
const getFilter = () => { // para filtrar/ordenar de a-z/z-a
    let option = document.getElementById("filtro").value;
    console.log(option);
    
    if(option == "HP"){
        console.log("|Entrou");
        console.log(lolList.childNodes);
        lolList.innerHTML = "";
       let dados = orderByhp();
       dados.forEach(element =>{
        renderLol(lol[element]);
    });
    }
    else if(option == "MP"){
        console.log("|Entrou");
        console.log(lolList.childNodes);
        lolList.innerHTML = "";
       let dados = orderBymp();
       dados.forEach(element =>{
        renderLol(lol[element]);
    });
    }
    else{
        console.log("|Entrou");
        console.log(lolList.childNodes);
        lolList.innerHTML = "";
       let dados = orderByarmor();
       dados.forEach(element =>{
        renderLol(lol[element]);
    });
    }
}

document.getElementById("sort").addEventListener("change",getOrder);
document.getElementById("filtro").addEventListener("change",getFilter);
