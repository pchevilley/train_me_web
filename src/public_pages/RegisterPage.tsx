import './RegisterPage.css';

import { AuthFormContainer } from './Authentication/AuthFormContainer';
import { SocialAuth } from './Authentication/SocialAuth';
import { AuthSeparator } from './Authentication/AuthSeparator';
import { AuthForm } from './Authentication/AuthForm';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { core } from '../core';

export function RegisterPage() {
    const history = useHistory();
        
    function submitForm(email: string, password: string, name?: string) {
        core.authentication.register(email, password).then((result) => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                history.push('/user_space');
            }
        });
    }

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
