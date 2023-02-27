import React from "react";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
    const fromatedDate = birth.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    return ( 
        <div className="card">
            <img src={picture} alt="Profile" />
            <div className="card-content">
                <p><span className="title">First name: </span>{firstName}</p>
                <p><span className="title">Last name: </span>{lastName}</p>
                <p><span className="title">Gender: </span>{gender}</p>
                <p><span className="title">Height: </span>{height}</p>
                <p><span className="title">Birth: </span>{fromatedDate}</p>
            </div>
        </div>
     );
}

export default IdCard;