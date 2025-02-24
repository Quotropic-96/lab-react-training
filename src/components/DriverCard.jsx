import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {
    return ( 
        <div className="driver-card">
            <img src={img} alt="Profile" />
            <div className="driver-card-info">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
     );
}

export default DriverCard;