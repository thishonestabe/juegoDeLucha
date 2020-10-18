import luchadores from "../models/luchadores.model.js";
const controllerLuchadores = {
    init(model) {

        model.luchadores = [...luchadores];
        model.jugadorActual = 1;
    },
    characterSelect(data, model) {

        // model.p1Characters.push(data);
        // data = JSON.parse(data);
        console.log(data,model)
        model[`p${model.jugadorActual}Characters`].push(data);
        model.luchadores = [...model.luchadores.filter(character => character.name !== data)]
        model.jugadorActual = (model.jugadorActual % 2 ? 2 : 1);
    }
}
let controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

export {controllerLuchadores, controllerWellcome}