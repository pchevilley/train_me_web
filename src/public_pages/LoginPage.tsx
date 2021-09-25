import { SyntheticEvent, useState } from 'react';
import './RegisterPage.css';
import { Icon } from '../shared/Icon';
import { FormInput } from './FormInput';
import { Button } from '../shared/Button';

import { core } from '../core';

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-page">
            <h1 className="login-page__title">Log in</h1>
            <section className="login-page__social">
                <span></span>
                <button className="login-page__social__btn"><Icon name="google" style="brands"></Icon></button>
                <button className="login-page__social__btn"><Icon name="facebook-f" style="brands"></Icon></button>
                <button className="login-page__social__btn"><Icon name="strava" style="brands"></Icon></button>
                <span></span>
            </section>
            <div className="login-page__separator">
                <div className="login-page__separator__line"></div>
                <h2 className="login-page__separator__h2">OR</h2>
                <div className="login-page__separator__line"></div>
            </div>
            <form onSubmit={(e) => submitForm(e, email, password)}>
                <FormInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormInput label="Password" type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
                <Button className="login-page__submit" type="submit" style="primary" label="Register" />
            </form>
        </div>
        
    );
}

<AuthFormContainer>
    <SocialAuth onClick={}/>
    <AuthSeparator />
    <AuthForm showName={false} onSubmit/> 
</AuthFormContainer> 

function submitForm(event: SyntheticEvent, email: string, password: string) {
    core.authentication.login();
    event.preventDefault();
}