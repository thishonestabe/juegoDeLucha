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
let controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

const controllerFight = {
    init(model) {
        console.log(model)
    }
}

export {controllerLuchadores, controllerWellcome, controllerFight}