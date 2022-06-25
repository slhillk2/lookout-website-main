class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="contact-details">
                    <div class="address">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>West Pier, Scarborough, YO11 1PD</p>
                    </div>
                    <div class="email-address">
                        <i class="fa-solid fa-envelope"></i>
                        <p>lookoutcafe8@gmail.com</p>
                    </div>
                    <div class="number">
                        <i class="fa-solid fa-phone"></i>
                        <p>01723351000</p>
                    </div>
                    <div class="opening-times">
                        <p>Mon - Fri:</p> <p>7:30am - 4pm</p>
                        <p>Saturday:</p> <p>7:30am - 8pm</p>
                        <p>Sunday:</p> <p>7:30am - 6pm</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);