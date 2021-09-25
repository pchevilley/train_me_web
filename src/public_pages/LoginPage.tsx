import { AuthFormContainer } from './Authentication/AuthFormContainer';
import { SocialAuth } from './Authentication/SocialAuth';
import { AuthSeparator } from './Authentication/AuthSeparator';
import { AuthForm } from './Authentication/AuthForm';

import { core } from '../core';

export function LoginPage() {
    return (
        <AuthFormContainer title="Login">
            <SocialAuth />
            <AuthSeparator />
            <AuthForm onSubmit={submitForm} submitLabel="Login" />
        </AuthFormContainer>
    );
}

function submitForm(email: string, password: string, name?: string) {
   core.authentication.login(email, password);
}