import { useState } from "react";

function ClickablePicture({ img, imgClicked}) {
    const [picture, setPicture] = useState(img);

    const handleChangePicture = () => {
        const newPicture = picture === img ? imgClicked : img;
        setPicture(newPicture);
    }

    return ( 
        <img onClick={handleChangePicture} src={picture} alt="Dude" />
     );
}

export default ClickablePicture;