import { SyntheticEvent, useState } from 'react';
import './RegisterPage.css';
import { Icon } from '../shared/Icon';
import { FormInput } from './FormInput';
import { Button } from '../shared/Button';

export function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register-page">
            <h1 className="register-page__title">Sign up to Train Me</h1>
            <section className="register-page__social">
                <span></span>
                <button className="register-page__social__btn"><Icon name="google" style="brands"></Icon></button>
                <button className="register-page__social__btn"><Icon name="facebook-f" style="brands"></Icon></button>
                <button className="register-page__social__btn"><Icon name="strava" style="brands"></Icon></button>
                <span></span>
            </section>
            <div className="register-page__separator">
                <div className="register-page__separator__line"></div>
                <h2 className="register-page__separator__h2">OR</h2>
                <div className="register-page__separator__line"></div>
            </div>
            <form onSubmit={(e) => submitForm(e, email, password)}>
                <FormInput label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <FormInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormInput label="Password" type="password" value={name} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
                <Button className="register-page__submit" type="submit" style="primary" label="Register" />
            </form>
        </div>
        
    );
}

function submitForm(event: SyntheticEvent, email: string, password: string) {
    console.log(email, password);
    event.preventDefault();
}