import { useState } from "react";

function SignupPage() {
    const initialState = {
        email: '',
        password: '',
        nationality: ''
    }
    const [newUser, setNewUser] = useState(initialState);
    const [confirmation, setConfirmation] = useState(false);
    const handleChange = (e) => {
        setNewUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setNewUser(initialState);
            setConfirmation(true);
        }, 1000)
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={newUser.email} onChange={handleChange}/>
                <label>Password</label>
                <input type="password" name="password" value={newUser.password} onChange={handleChange} />
                <select name="nationality" value={newUser.nationalit} onChange={handleChange}>
                    <option value="en">England</option>
                    <option value="de">Deuchland</option>
                    <option value="fr">France</option>
                </select>
                <button type="submit">Sign up</button>
            </form>
            <div>{confirmation && 'User added correctly'}</div>
        </div>
     );
}

export default SignupPage;