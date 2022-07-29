let dimensioneGriglia = 10;
let numeroCelle = dimensioneGriglia ** 2;


const tabelloneEl = document.querySelector('.tabellone');
for(let i = 0; i<numeroCelle; i++){
    const cella = getSquareElement();
    tabelloneEl.append(cella);
}

function getSquareElement(){
    const square = document.createElement('div');
    square.classList.add('square');

    return square;
}


