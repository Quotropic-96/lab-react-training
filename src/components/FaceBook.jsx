import profiles from '../data/berlin.json';

function FaceBook() {
    return ( 
        <div className="faceBook">
            {profiles.map((elem, idx) => {
                return <div key={idx} className='faceBookCard'>
                    <img src={elem.img} alt={elem.firstName} />
                    <div className="faceBookInfo">
                        <p><span>First name:</span> {elem.firstName}</p>
                        <p><span>Last name:</span> {elem.lastName}</p>
                        <p><span>Country:</span> {elem.country}</p>
                        <p><span>Type:</span> {elem.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            })}
        </div>
     );
}

export default FaceBook;