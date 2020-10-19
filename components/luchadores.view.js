let luchadoresView = function(model)  {
    return `
        <div class="card">
        <div class="card-header">
            Player Select
        </div>
        <div class="card-body">
        <div class="card-title"> 
        Luchadores disponibles ${model.luchadores.length} 
        <br>
        Player's ${model.jugadorActual} turn
        </div>
        
  

        
        
        <div class='personajes-container'>${renderCharacterArray(model.luchadores)}</div>
        <hr>
       <div class="d-flex flex-row bd-highlight mb-3">
        <span class='personajes-p1 p-2 bd-highlight'><strong>P1:</strong>${renderPlayerCharacterArray(model.p1Characters)}</span>
       
        <span class='personajes-p2 p-2 bd-highlight'><strong>P2:</strong>${renderPlayerCharacterArray(model.p2Characters)}</span>
        </div>
        </div>
        <div>${renderFightBtn(model.fightBtn, model.p1Characters, model.p2Characters)}</div>
        </div>
    `
}



function renderCharacterArray(luchadoresArr) {
    let charactersTemplate = '';

    for (let character of luchadoresArr) {

        charactersTemplate += `<div class="addEvento p-1 bd-highlight border border-primary" data-metodo="characterSelect" data-info="${character.name}">${character.name}</div>`

    }

    return charactersTemplate

}

function renderPlayerCharacterArray(luchadoresArr) {
    let charactersTemplate = '';

    for (let character of luchadoresArr) {

        charactersTemplate += `<div class="p-1 bd-highlight">${character}</div>`

    }

    return charactersTemplate

}

function renderFightBtn(flag,p1,p2) {
    if(flag) {
        sessionStorage.setItem("p1", p1);
        sessionStorage.setItem("p2", p2);
        return `<a href="#/fight" class="btn btn-danger">FIGHT</a>`
    } else {
        return ''
    }
}







export default luchadoresView