class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="contact-details">
                    <div class="address">
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="https://g.page/lookout-on-the-pier?share">West Pier, Scarborough, YO11 1PD</a>
                    </div>
                    <div class="email-address">
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:lookoutcafe8@gmail.com">lookoutcafe8@gmail.com</a>
                    </div>
                    <div class="number">
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:+01723351000">01723 351 000</a>
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