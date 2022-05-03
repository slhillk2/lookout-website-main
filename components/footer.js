class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="contact-details">
                    <i class="fa-solid fa-location-dot"> West Pier,<br> Scarborough,<br> YO11 1PD</i>
                    <i class="fa-solid fa-envelope"> lookoutcafe8@gmail.com</i>
                    <i class="fa-solid fa-phone"> 01723351000</i>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);