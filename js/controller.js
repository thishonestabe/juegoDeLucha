import luchadores from "../models/luchadores.model.js";

const controllerLuchadores = {
    init(model) {

        model.luchadores = [...luchadores];
        model.jugadorActual = 1;
    },
    characterSelect(data, model) {

         // data = JSON.parse(data)

        console.log(data, data.name ,model)
        model[`p${model.jugadorActual}Characters`].push(data);
        model.luchadores = [...model.luchadores.filter(character => character.name !== data)]
        model.jugadorActual = (model.jugadorActual % 2 ? 2 : 1);
        if (model.luchadores.length === 0) {
            model.fightBtn = true;
        }
    }
}
const controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

const controllerFight = {
    init(model) {
        model.p1Characters = ([...sessionStorage.getItem("p1").split(',')]).map(c => {
            return luchadores.find(a => a.name === c)
        });

        model.p2Characters = [...sessionStorage.getItem("p2").split(',')].map(c => {
            return luchadores.find(a => a.name === c)
        });
        console.log(model)
    },
    punchA(data,model) {
        console.log(data)

        this.afterAction(data,model);



    },
    kickA(data,model) {
        console.log(data)
        this.afterAction(data,model);
    },
    specialA(data,model) {
        console.log(data)
        this.afterAction(data,model);
    },
    changePlayer(model) {
        model.jugadorActual = (model.jugadorActual % 2 ? 2 : 1);
    },
    afterAction(data, model) {
        this.changePlayer(model);

        model[`p${model.jugadorActual}Health`] -= data;

        this.checkIfWinRound(model);
    },
    checkIfWinRound(model) {
        if(model.p1Health <= 0 || model.p2Health <= 0) {
            if (model.round < 3) {
            model.p1Wins = (model.p1Health > model.p2Health ? model.p1Wins += 1 : model.p1Wins);
            model.p2Wins = (model.p2Health > model.p1Health ? model.p2Wins += 1 : model.p2Wins);
            model.p1Health = 100;
            model.p2Health = 100;
            model.p1Health = 100;
                if (model.round !== 2) {
                    model.round += 1;
                } else {
                    model.winner = (model.p1Wins > model.p2Wins ? "PLAYER 1" : "PLAYER 2");
                }

            }


        }
    }
}

export {controllerLuchadores, controllerWellcome, controllerFight}