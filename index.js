import App from './js/app.js';
import Router from "./js/router.js";
import luchadores from "./components/luchadores.component.js";
import wellcome from "./components/wellcome.component.js";


const app = new App('#app');
const router = new Router(app);

app.addComponent(wellcome, luchadores);
router.addRoute(wellcome.name, wellcome.route);
router.addRoute(luchadores.name, luchadores.route);

app.showComponent('wellcome');