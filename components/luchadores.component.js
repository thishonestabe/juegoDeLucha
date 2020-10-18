let luchadores = {
    name: 'luchadores',
    route: '^#/luchadores$',
    model: {
        luchadores: []
    },
    view(model) {
        return `<h2>Aqui hay ${model.luchadores.length} luchadores</h2>`
    }
}

export default luchadores