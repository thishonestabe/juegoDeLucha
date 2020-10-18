class App {
    constructor(selector) {
        this.appElement = document.querySelector(selector);
        this.components = {};
    }
    addComponent(...components) {
        for (const component of components) {
            this.components[component.name] = component;
        }
    }
    showComponent(name) {
        this.currentComponent = this.components[name];
        //this.updateView();
        if(this.currentComponent) {
            this.currentComponent.controller(this.currentComponent.model)
        }
        this.updateView();
    }
    updateView() {
        if(this.currentComponent) {
            this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
        }
    }
}

export default App