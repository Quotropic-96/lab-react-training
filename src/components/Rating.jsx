import emptyStar from '../assets/images/star.png';
import filledStar from '../assets/images/star (2).png';
function Rating({children}) {
    const roundRating = Math.round(children);
    const ratingStyle = {
        display: 'flex',
    }
    const starStyle = {
        width: '20px',
        height: '20px'
    }
    const rating = [];
    for (let i = 0; i <= 4; i++) {
        rating.push(i < roundRating ? <img style={starStyle} key={i} src={filledStar} alt='Filled star rating' /> : <img style={starStyle} key={i} src={emptyStar} alt='Filled star rating' />);
    }
    return ( 
        <div className="rating-container" style={ratingStyle}>
            {rating}
        </div>
     );
}

export default Rating;