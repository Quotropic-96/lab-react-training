import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    const auxCountries = [];
    const allCountries = profiles.map(elem => elem.country).filter(elem => {
        if (!auxCountries.includes(elem)) {
            auxCountries.push(elem);
            return true;
        }
        return false;
    });
    const [selectCountry, setSelectCountry] = useState('All');

    const handleSelectCountry = (e) => {
        setSelectCountry(e.target.value);
    }
    return ( 
        <div className="faceBook">
            <div className="countryBar">
                <button key={'All'} className={'All' === selectCountry ? 'selectedCountry': ''} value={'All'} onClick={handleSelectCountry}>All</button>
                {allCountries.map(elem => <button key={elem} value={elem} className={elem === selectCountry ? 'selectedCountry': ''} onClick={handleSelectCountry}>{elem}</button>)}
            </div>
            {profiles.map((elem, idx) => {
                return <div key={idx} className={elem.country === selectCountry ? 'faceBookCard selectedCountry' : 'faceBookCard'}>
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