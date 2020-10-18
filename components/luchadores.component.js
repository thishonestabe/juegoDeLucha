import {controllerLuchadores} from "../js/controller.js";
import luchadoresView from "./luchadores.view.js";

let luchadores = {
    name: 'luchadores',
    route: '^#/luchadores$',
    model: {
        luchadores: [],
        jugadorActual: 1,
        p1Characters: [],
        p2Characters: []
    },
    view(model, app) {
        return luchadoresView(model,app)
    },

    controller: controllerLuchadores
}

export default luchadores