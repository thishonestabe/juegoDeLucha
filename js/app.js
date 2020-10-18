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
            this.currentComponent.controller.init(this.currentComponent.model)
        }
        this.updateView();

    }
    userAction(name,data) {

        console.log(name,data);

        if(this.currentComponent.controller[name]) {
            this.currentComponent.controller[name](data,this.currentComponent.model)
        }
        this.updateView();
    }
    updateView() {
        if(this.currentComponent) {
            this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model, this);
            let elementos = document.getElementsByClassName('addEvento');
            if (elementos) {
                for (let elemento of elementos) {
                    // elemento.addEventListener("onclick", this.userAction(elemento.dataset.metodo, elemento.dataset.character))
                    elemento.addEventListener("click", () => {
                        console.log("info: ", elemento.dataset.info);
                        this.userAction(elemento.dataset.metodo, elemento.dataset.info)
                    });

                }


            }

        }
    }
}

export default App