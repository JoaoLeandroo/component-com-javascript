
class Card extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        // Criando O component
        const componentRoot = document.createElement('h1')
        componentRoot.setAttribute("class", 'component')
        componentRoot.textContent = "Hello World!"

        // Criando o Style do component
        const style = document.createElement('style')
        style.textContent = `
            .component {
                color: blue;
                font-family: verdana;
            }
        `
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }

}


customElements.define('card-element', Card)