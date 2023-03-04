import { useEffect, useState } from "react";

function Carousel({images}) {
    const [imgIdx, setImgIdx] = useState(0)
    const [image, setImage] = useState(images[imgIdx]);

    useEffect(() => {
        setImage(images[imgIdx])
    }, [imgIdx]);

    const handleLeft = () => {
        if (imgIdx > 0) {
            setImgIdx(prev => prev - 1);
        }
    }
    const handleRight = () => {
        if (imgIdx < images.length - 1) {
            setImgIdx(prev => prev + 1);
        }
    }

    return ( 
        <div>
            <img src={image} alt="Default" />
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
        </div>
     );
}

export default Carousel;