class Router {
    constructor(app) {
        this.app = app;
        this.routes = [];
        this.hasChange = this.hasChange.bind(this);
        window.addEventListener('hashchange', this.hasChange);
    }
    addRoute(name,path) {
        this.routes.push({
            name,
            path
        })
    }
    hasChange() {

        const {hash} = window.location;
        const route = this.routes.find(route => {
           return hash.match(new RegExp(route.path));
        });
        console.log("ruta: ",route);
        if(route) {
            this.app.showComponent(route.name);
        }
    }
}
export default Router