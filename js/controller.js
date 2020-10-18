let controllerLuchadores = {
    init(model) {
        const personajes = ["Ryu","Chun-Li","Ken","Cammy","Guile","Ibuki"];
        model.luchadores = [...personajes];
    }
}
let controllerWellcome = {
    init(model) {
        console.log(model)
    }
}

export {controllerLuchadores, controllerWellcome}