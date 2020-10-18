import luchadores from "../models/luchadores.model.js";
const controllerLuchadores = {
    init(model) {

        model.luchadores = [...luchadores];
        model.jugadorActual = 1;
    },
    characterSelect(data, model) {
        console.log(data,model)
        model.p1Characters.push(data);
        model.jugadorActual = (model.jugadorActual % 2 ? 2 : 1);
    }
}
let controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

export {controllerLuchadores, controllerWellcome}