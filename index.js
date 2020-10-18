import App from './js/app.js';

const app = new App('#app');

app.addComponent({
    name: 'luchadores',
    model: {
        luchadores: []
    },
    view(model) {
        return `<h2>Aqui hay ${model.luchadores.length} luchadores</h2>`
    }
});

app.showComponent('luchadores');