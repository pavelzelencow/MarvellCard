import './MarvelCard.css';

function MarvelCard({imgSrc, name, protection, attack}) {
    
    return (
        <div className="card">
            <div className="card__imgbox">
                <img className='card__img' src={imgSrc}></img>
            </div>
            <div className="card__info">
                <p className="card__name">{name}</p>
            </div>
            <div className='card__skills'>
                <p className='card__skill'>Attack: {attack}</p>
                <p className='card__skill'>Protection: {protection}</p>
               
            </div>
        </div>
    )
}

export default MarvelCard;