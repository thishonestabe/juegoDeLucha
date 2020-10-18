let luchadoresView = function(model)  {
    return `
        <h2>Aqui hay ${model.luchadores.length} luchadores</h2>
        <h1>Player Select</h1>
        <h3>Player's ${model.jugadorActual} turn</h3>
        <div class='personajes-container'>${renderCharacterArray(model.luchadores)}</div>
        <hr>
        <div class='personajes-p1'>${renderPlayerCharacterArray(model.p1Characters)}</div>
        <hr>
        <div class='personajes-p2'>${renderPlayerCharacterArray(model.p2Characters)}</div>
    `
}



function renderCharacterArray(luchadoresArr) {
    let charactersTemplate = '';

    for (let character of luchadoresArr) {

        charactersTemplate += `<div class="addEvento" data-metodo="characterSelect" data-info="${character.name}">${character.name}</div>`

    }

    return charactersTemplate

}

function renderPlayerCharacterArray(luchadoresArr) {
    let charactersTemplate = '';

    for (let character of luchadoresArr) {

        charactersTemplate += `<div>${character}</div>`

    }

    return charactersTemplate

}







export default luchadoresView