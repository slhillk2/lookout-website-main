class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="head-banner">
                <img src="img/lookout_logo_transbg2.png" alt="lookout on the pier logo image" class="logo">    
                <nav class="nav-grid-container">
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="menu.html">Menu</a></li>
                    </ul> 
                    <div class="burger-menu">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>  
                </nav>
    
            </header>  
            `;
    }  
}

customElements.define('header-component', Header);