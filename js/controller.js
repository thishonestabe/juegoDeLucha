import luchadores from "../models/luchadores.model.js";
let controllerLuchadores = {
    init(model) {

        model.luchadores = [...luchadores];
    }
}
let controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

export {controllerLuchadores, controllerWellcome}