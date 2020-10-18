let wellcome = {
    name: 'wellcome',
    route: '^#/wellcome$',
    model: {
        x: "hi"
    },
    view() {
        return `<div class='welcome-container'>

                    <div class='welcome-left'></div>
                    <div class='welcome-right'></div>

                    <h1>STREET<br>FIGHTER<br>1999</h1>

                    <a href="#/luchadores">Start</a>

                </div>`
    },
    controller(model) {
        console.log(model);
    }
}

export default wellcome

