
class Card extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        // Criando O component
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute("class", 'component')
        componentRoot.innerHTML = `
            <h2>Hello World</h2>
        `

        // Criando o Style do component
        const style = document.createElement('style')
        style.textContent = `
            .component {
                width: 150px;
                height: 150px;
                text-align: center;
                margin: 5px;
                background-color: #fff;
                display: flex;
                align-itens: center;
            }

            .component:hover {
                background-color: #c3c3c3;
            }

            h2 {
                color: blue;
                font-family: verdana;
                margin: auto;
            }
        `
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }

}


customElements.define('card-element', Card)