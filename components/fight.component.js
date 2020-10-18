import {controllerFight} from "../js/controller.js";
import fightView from "./fight.view.js";

let fight = {
    name: 'fight',
    route: '^#/fight$',
    model: {
        round: 0,
        jugadorActual: 1,
        p1Characters: [],
        p1Health: 100,
        p1Wins: 0,
        p2Characters: [],
        p2Health: 100,
        p2Wins: 0

    },
    view(model) {
        return fightView(model)

    },

    controller: controllerFight
}

export default fight