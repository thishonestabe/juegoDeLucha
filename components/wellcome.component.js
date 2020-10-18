import {controllerWellcome} from "../js/controller.js";
import wellcomeView from "./wellcome.view.js";

let wellcome = {
    name: 'wellcome',
    route: '^#/wellcome$',
    model: {
        x: "hi"
    },
    view() {
        return wellcomeView
    },
    controller: controllerWellcome
}

export default wellcome

