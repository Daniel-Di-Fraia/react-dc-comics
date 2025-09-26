const ProdComic = (props) => {

    const { thumb, title } = props.cardProp

    return (
        <div>
            <figure id="img-hover">
                <img id="comics" src={thumb} alt={title} />
                    <figcaption>{title}</figcaption>
            </figure>
        </div>
    )
}

export default ProdComic