import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const colors = ['purple','blue','green','yellow','orange','red'];

    const buttonStyle = {
        backgroundColor : `${colors[Math.floor(Math.random()*colors.length)]}`
    }
    const handleIncreaseLikes = () => {
        setLikes(prev => prev + 1);
    }
    return ( 
        <button style={buttonStyle} onClick={handleIncreaseLikes}>{likes} Likes</button> 
    );
}

export default LikeButton;