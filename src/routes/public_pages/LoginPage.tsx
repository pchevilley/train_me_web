import { AuthFormContainer } from './Authentication/AuthFormContainer';
import { SocialAuth } from './Authentication/SocialAuth';
import { AuthSeparator } from './Authentication/AuthSeparator';
import { AuthForm } from './Authentication/AuthForm';
import { useNavigate } from "react-router-dom";

import { core } from '../../core';

export function LoginPage() {
    const navigate = useNavigate();

    function submitForm(email: string, password: string) {
        core.authentication.login(email, password)
            .then(result => {
                if (result instanceof Error) {
                    console.error(result);
                } else {
                    navigate('/u');
                }
            });
    }

    return (
        <AuthFormContainer title="Login">
            <SocialAuth />
            <AuthSeparator />
            <AuthForm onSubmit={submitForm} submitLabel="Login" />
        </AuthFormContainer>
    );
}

