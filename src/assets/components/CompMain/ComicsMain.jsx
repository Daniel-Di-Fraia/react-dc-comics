//importiamo gli oggetti dal file JS comics.js
import comics from "/comics.js";


const ComicsMain = () => {
    return (

            <div className="d-flex">

                {/* Card di prodotto  */}
                {comics.map(comicItem => (
                    <div key={comicItem.id}>
                        <figure>
                            <img id="comics" src={comicItem.thumb} alt={comicItem.title} />
                            <figcaption>{comicItem.title}</figcaption>
                        </figure>
                    </div>
                ))}
             </div>    
    )
}

export default ComicsMain