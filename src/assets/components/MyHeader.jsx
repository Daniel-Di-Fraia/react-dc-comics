// creo l header della pagina e lo esporto
const MyHeader = () => {
    return (
        <header className="container">
            <div className="row-flex container-item">
            <figure>
                <img src="/dc-logo.png" alt="Logo" className="dim"/>
            </figure>
            <nav>
                <ul class="Nav-Header">
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#" className="active">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default MyHeader