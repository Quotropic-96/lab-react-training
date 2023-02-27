function BoxColor({r, g, b}) {
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: '20px',
        margin: '10px 30px 10px 30px',
        border: '1px solid black',
        textAlign: 'center'
    };
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    const hexVal = "#" + ("000000" + hex).slice(-6);
    return ( 
        <div style={divStyle}>
            <p>rgb({r},{g},{b})</p>
            <p>{hexVal}</p>
        </div>
     );
}

export default BoxColor;