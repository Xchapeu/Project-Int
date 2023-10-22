import './styles.css';

export const LocalCard = ({ name, location, description, imgSrc, mapSrc }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt="Imagem do Card" />
            <div>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <p>{description}</p>
            </div>
            <iframe src={mapSrc} width={400} height={300} style={{border:0, borderRadius: 24}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}