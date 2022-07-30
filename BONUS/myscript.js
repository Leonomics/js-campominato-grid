let dimensioneGriglia = 10;
let numeroCelle = dimensioneGriglia ** 2;
const tabelloneEl = document.querySelector('.tabellone');
const playButtonEl = document.getElementById('play_button');
/*const easyDifficulty = document.querySelectorAll('option[value="easy"]');
const mediumDifficulty = document.querySelectorAll('option[value="medium"]');
const hardDifficulty = document.querySelectorAll('option[value="hard"]');*/


playButtonEl.addEventListener('click', showGrid);

function getSelectedValue() {    
    let selectedValue = document.getElementById("difficulty_button").value;
    console.log(selectedValue);
    return selectedValue;
}

function showGrid(){
    tabelloneEl.style.visibility = "visible";
    generaGriglia(dimensioneGriglia, tabelloneEl);
}

function generaGriglia(dimensione, tabellone){
    val = getSelectedValue();
    if(val == "medium"){
        dimensione = 9;
    }else if(val == "hard"){
        dimensione = 7;
    }else{
        dimensione;
    }
    const numeroCelle = dimensione ** 2;
    //const div = document.createElement('div');

    for(let i = 0; i<numeroCelle; i++){
        const cella = getSquareElement();
        cella.innerHTML = i + 1;
        //div.append(cella);
        tabellone.append(cella);    
    }

    //return div.innerHTML;

}


function getSquareElement(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', clickHandler)

    return square;
}

function clickHandler(){

    const square = this;
    square.classList.toggle('clicked');
    square.removeEventListener('click', clickHandler);
    console.log("cella numero: " + parseInt(square.innerHTML))

}
