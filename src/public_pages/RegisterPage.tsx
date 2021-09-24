import { SyntheticEvent, useState } from 'react';
import './RegisterPage.css';

export function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={(e) => submitForm(e, email, password)}>
            <input type="text" required name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" required name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" required name="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
    );
}

function submitForm(event: SyntheticEvent, email: string, password: string) {
    console.log(email, password);

    event.preventDefault();
}