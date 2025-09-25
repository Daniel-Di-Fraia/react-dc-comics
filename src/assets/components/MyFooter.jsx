// creo il footer della pagina e lo esporto
const MyFooter = () => {
    return (
        <footer className="container">
            {/* prima sezione */}
            <section className="container-item">
            <nav className="row-nav footer-dim">
                <ul className="nav-foot">
                    <li className="nav-title ">DC COMICS</li>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Tv</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Videos</a></li>
                    <li className="nav-title">SHOP</li>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
                <ul className="nav-foot">
                    <li className="nav-title">DC</li>
                    <li><a href="#">Term of use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshops</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul className="nav-foot">
                    <li className="nav-title">SITES</li>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazine</a></li>
                    <li><a href="#">DC Kids</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>
                </ul>
            </nav>
            </section>

            {/* seconda sezione */}
            <section className="footer-sec container">
                <button id="sign">SIGN-UP NOW!</button>
                <ul className="row-social">
                    <li className="last-link">
                        <a href="#">FOLLOW US</a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <img className="dim-link" src="/footer-facebook.png" alt="Logo" />
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <img className="dim-link" src="/footer-twitter.png" alt="Logo" />
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <img className="dim-link" src="/footer-youtube.png" alt="Logo" />
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <img className="dim-link" src="/footer-pinterest.png" alt="Logo" />
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure>
                                <img className="dim-link" src="/footer-periscope.png" alt="Logo" />
                            </figure>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default MyFooter