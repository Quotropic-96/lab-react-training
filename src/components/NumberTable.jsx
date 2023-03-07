function NumbersTable({ limit }) {
    const arr = []
    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }
    const tableStyle = {
        display: 'flex',
        flexWrap: 'wrap'

    }
    return ( 
        <div style={tableStyle}>
            {arr.map((elem, idx) => <div key={idx} className={elem%2===0 ? 'cell red' : 'cell'}>{elem}</div>)}
        </div>
     );
}

export default NumbersTable;