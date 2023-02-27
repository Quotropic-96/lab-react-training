// import React from 'react';
// import masterCardImg from '../assets/images/master-card.svg';
// import visaImg from '../assets/images/visa.png';

// function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
//     const typeImg = type === 'Visa' ? visaImg : masterCardImg;
//     const numberTermination = number.substring(number.length - 4);
//     const numberStyle = {
//         fontSize: '4rem'
//     }
//     const cardStyle = {
//         backgroundColor: `${bgColor}`,
//         color: `${color}`
//     }
//     return ( 
//         <div className="card" style={cardStyle}>
//             <img src={typeImg} alt="Card logo" />
            
//             <p><span style={numberStyle}>···· ···· ···· </span>{numberTermination}</p>
//             <p>Expires {expirationMonth}/{expirationYear}</p>
//             <p>{bank}</p>
//             <p>{owner}</p>
//         </div>
//      );
// }

// export default CreditCard;