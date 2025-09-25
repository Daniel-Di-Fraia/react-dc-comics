//importo i componenti del main creati in MyMainPage
import LinkMain from "./CompMain/LinkMain"
import ComicsMain from "./CompMain/ComicsMain"

// creo il main della pagina e lo esporto
const MyMainPage = () => {
    return (
        <main className="container">
            {/* sezione contenuti */}
            <section className="container-big">
                <ComicsMain/>
                <div className="row">
                <button id="load">LOAD MORE</button>
                </div>
            </section>

            {/* sezione links sito */}
            <section className="site-nav">
               <LinkMain/>
            </section>
        </main>
    )
}

export default MyMainPage