import './RegisterPage.css';

import { AuthFormContainer } from './Authentication/AuthFormContainer';
import { SocialAuth } from './Authentication/SocialAuth';
import { AuthSeparator } from './Authentication/AuthSeparator';
import { AuthForm } from './Authentication/AuthForm';

import { core } from '../core';
import { Link } from 'react-router-dom';

export function RegisterPage() {
    return (
        <AuthFormContainer title="Sign up to Train Me">
            <SocialAuth />
            <AuthSeparator />
            <AuthForm onSubmit={submitForm} submitLabel="Register" showName={true}/>
            <p className="register-page__login">
                Already have an account? <br/>
                <Link to="/login">Log in</Link>
            </p>
        </AuthFormContainer>
    );
}

function submitForm(email: string, password: string, name?: string) {
    core.authentication.register(email, password).then((result) => {
        if (result instanceof Error) {
            console.log(result);
        } else {
            // TODO: redirect to user space
        }
    });
}