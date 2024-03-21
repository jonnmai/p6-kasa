import '../Banner/Banner.scss'

function Banner({ imgUrl, content }) {
    return (
        <div className="banner">
            <img src={ imgUrl } alt="Bord de mer avec d'énormes rochers" />
            {content && <h2 className="content">{content}</h2>}
        </div>
    )
}

export default Banner