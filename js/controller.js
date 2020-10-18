let controllerLuchadores = {
    init(model) {
        const personajes = ["Abraham","Luis"];
        model.luchadores = [...personajes];
    }
}
let controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

export {controllerLuchadores, controllerWellcome}