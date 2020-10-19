let fightView = function(model)  {
    let turno = `p${model.jugadorActual}Characters`
    return `<div>${renderFightScreen(model,turno)}</div>
            
    `
};

function renderFightScreen(model,turno) {
    if(model.winner === 'none') {

        return `
        <div class='card'>
        <div class='card-header'>    
        <h1>Fight</h1>
        <h2>Round ${model.round + 1}</h2>
        </div>
        <div class='card-body'>
        <div class="fight-container d-flex flex-row bd-highlight justify-content-center">
            <span class="p1-side  bd-highlight d-flex flex-column bd-highlight justify-content-center" style="width: 30%; text-align: center">
                <div class="player-name">Name: ${model.p1Characters[model.round].name}</div>
                <div class="player-life">Health: ${model.p1Health}</div>
            
                <div class="player-life">Wins: ${model.p1Wins}</div>
                <div class="progress">
                <div class="progress-bar ${lifeColor(model.p1Health)}" role="progressbar" style="width: ${model.p1Health}%" aria-valuenow='${model.p1Health}' aria-valuemin="0" aria-valuemax="100">${model.p1Health}
                </div>
            </div>
            </span>
            <span class="p2-side  bd-highlight d-flex flex-column bd-highlight justify-content-center" style="width: 30%; text-align: center">
                <div class="player-name">Name: ${model.p2Characters[model.round].name}</div>
                <div class="player-life">Health: ${model.p2Health}</div>
                <div class="player-life">Wins: ${model.p2Wins}</div>
                <div class="progress">
                <div class="progress-bar ${lifeColor(model.p2Health)}" role="progressbar" style="width: ${model.p2Health}%" aria-valuenow='${model.p2Health}' aria-valuemin="0" aria-valuemax="100">${model.p2Health}
                </div>
                </div>
            </span>
            
            </div>
            <div class="fight-container d-flex flex-row bd-highlight justify-content-center" style="margin-top: 20px">
            <button type="button" class="addEvento btn btn-primary" data-metodo="punchA" data-info="${model[turno][model.round].punch}">Punch</button>
            <button type="button" class="addEvento btn btn-warning" data-metodo="kickA" data-info="${model[turno][model.round].kick}">Kick</button>
            <button type="button" class="addEvento btn btn-danger"  data-metodo="specialA" data-info="${model[turno][model.round].special}">Special</button>
            </div>
            </div>
            </div>
        `

    } else {
        return `<h1>WINNER ${model.winner}</h1>`
    }
}

function lifeColor(life) {
    if(life > 60) return "bg-success";
    if(life <= 60 && life >= 30) return "bg-warning";
    if(life < 30) return "bg-danger";
}

export default fightView