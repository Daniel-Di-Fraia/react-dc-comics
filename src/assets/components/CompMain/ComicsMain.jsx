//importiamo gli oggetti dal file JS comics.js
import comics from "/comics.js";
import ProdComic from "./ProdComic";

const ComicsMain = () => {
    return (
            
            <div className="d-flex">

                {/* Card di main pagina  */}
                {/* {comics.map(comicItem => (
                    <div key={comicItem.id}>
                        <figure id="img-hover">
                            <img id="comics" src={comicItem.thumb} alt={comicItem.title} />
                            <figcaption>{comicItem.title}</figcaption>
                        </figure>
                    </div>
                ))} */}
                {/* Card di prodotto  */}
                {comics.map(card => (
                    <ProdComic
                        key={card.id}
                        cardProp={card}
                    />

                ))}
            </div>    
    )
}

export default ComicsMain