class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="head-logo">
                <h1>Lookout <br> <span>on the pier</span> </h1>
            </header>
            `;
    }  
}

customElements.define('header-component', Header);