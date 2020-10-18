let fightView = function(model)  {
    let turno = `p${model.jugadorActual}Characters`
    return `<div>${renderFightScreen(model,turno)}</div>
            
    `
};

function renderFightScreen(model,turno) {
    if(model.winner === 'none') {

        return `<h1>Fight</h1>
        <h2>Round ${model.round + 1}</h2>
        <div class="fight-container">
            <div class="p1-side">
                <div class="player-name">Name: ${model.p1Characters[model.round].name}</div>
                <div class="player-life">Health: ${model.p1Health}</div>
                <div class="player-life">Wins: ${model.p1Wins}</div>
            </div>
            <div class="p2-side">
                <div class="player-name">Name: ${model.p2Characters[model.round].name}</div>
                <div class="player-life">Health: ${model.p2Health}</div>
                <div class="player-life">Wins: ${model.p2Wins}</div>
            </div>

            <button class="addEvento" data-metodo="punchA" data-info="${model[turno][model.round].punch}">Punch</button>
            <button class="addEvento" data-metodo="kickA" data-info="${model[turno][model.round].kick}">Kick</button>
            <button class="addEvento" data-metodo="specialA" data-info="${model[turno][model.round].special}">Special</button>
        </div>`

    } else {
        return `<h1>WINNER ${model.winner}</h1>`
    }
}

export default fightView