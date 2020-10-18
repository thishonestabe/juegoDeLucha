import {controllerLuchadores} from "../js/controller.js";
import luchadoresView from "./luchadores.view.js";

let luchadores = {
    name: 'luchadores',
    route: '^#/luchadores$',
    model: {
        luchadores: []
    },
    view(model) {
        return luchadoresView(model)
    },

    controller: controllerLuchadores
}

export default luchadores