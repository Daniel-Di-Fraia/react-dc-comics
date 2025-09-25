import LinkMain from "./CompMain/LinkMain"
// creo il main della pagina e lo esporto
const MyMainPage = () => {
    return (
        <main className="container">
            {/* sezione contenuti */}
            <section className="container-item">
                <p className="pos">content goes here</p>
                <p className="pos">content goes here</p>
            </section>

            {/* sezione links sito */}
            <section className="site-nav">
               <LinkMain/>
            </section>
        </main>
    )
}

export default MyMainPage