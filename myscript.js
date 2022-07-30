let dimensioneGriglia = 10;
let numeroCelle = dimensioneGriglia ** 2;
const tabelloneEl = document.querySelector('.tabellone');
const playButtonEl = document.getElementById('play_button');

playButtonEl.addEventListener('click', showGrid);



function showGrid(){
    tabelloneEl.style.visibility = "visible";
    generaGriglia(dimensioneGriglia, tabelloneEl);
}

function generaGriglia(dimensione, tabellone){
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
