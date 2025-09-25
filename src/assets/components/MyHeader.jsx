//creo array per lista
const navItems = [
  { label: "CHARACTERS", href: "#", active: false },
  { label: "COMICS", href: "#", active: true },
  { label: "MOVIES", href: "#", active: false },
  { label: "TV", href: "#", active: false },
  { label: "GAMES", href: "#", active: false },
  { label: "COLLECTIBLES", href: "#", active: false },
  { label: "VIDEOS", href: "#", active: false },
  { label: "FANS", href: "#", active: false },
  { label: "NEWS", href: "#", active: false },
  { label: "SHOP", href: "#", active: false }
];

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
                {navItems.map((item) => (
                    <li><a href={item.href}>{item.label}</a></li>
                ))}
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default MyHeader