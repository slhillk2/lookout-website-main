class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="wrapper">
                <nav class="nav-grid-container">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="about-us.html">About</a></li>
                        <li><a href="contact-us.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define('nav-component', Nav);