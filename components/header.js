class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="head-banner">
            <img src="img/lookout_logo_transbg2.png" alt="lookout on the pier logo image" class="logo">
            </header> 
            `;
    }  
}

customElements.define('header-component', Header);