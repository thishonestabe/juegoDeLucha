import {controllerFight} from "../js/controller.js";
import fightView from "./fight.view.js";

let fight = {
    name: 'fight',
    route: '^#/fight$',
    model: {
        luchadores: [],
        jugadorActual: 1,
        p1Characters: [],
        p2Characters: [],
        fightBtn: true
    },
    view(model) {
        return fightView(model)

    },

    controller: controllerFight
}

export default fight