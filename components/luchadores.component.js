import controllerLuchadores from "../js/controller.js";

let luchadores = {
    name: 'luchadores',
    route: '^#/luchadores$',
    model: {
        luchadores: []
    },
    view(model) {
        return `<h2>Aqui hay ${model.luchadores.length} luchadores</h2>`
    },
    controller(model) {
        const luchadores = controllerLuchadores.getLuchadores();
        model.luchadores = [...luchadores];

    }
}

export default luchadores