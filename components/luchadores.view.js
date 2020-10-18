let luchadoresView = (model) => {
    return `
        <h2>Aqui hay ${model.luchadores.length} luchadores</h2>
        <h1>Player Select</h1>
        <h3>Player's ${model.jugadorActual} turn</h3>
        <div class='personajes-container'>${renderCharacterArray(model.luchadores)}</div>
    `
}

function renderCharacterArray(luchadoresArr) {
    let charactersTemplate = '';

    for (let character of luchadoresArr) {

        charactersTemplate += `<div>${character.name}</div>`

    }

    return charactersTemplate

}



export default luchadoresView