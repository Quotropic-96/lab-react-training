function Greetings({lang, children}) {
    let greet;
    switch (lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'es':
            greet = 'Hola';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        default:
            greet = 'Hello'
            break;
    }
    return ( 
        <div className="greeting-message">
            <p>{greet} {children}</p>
        </div>
     );
}

export default Greetings;