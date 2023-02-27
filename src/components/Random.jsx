function Random({min, max}) {
    const randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ( 
        <p>Random value between {min} and {max} ={'>'} {randNum}</p>
     );
}

export default Random;