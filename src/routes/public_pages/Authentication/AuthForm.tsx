import './AuthForm.css';
import { useState } from 'react';
import { FormInput } from '../FormInput';
import { Button } from '../../../shared/Button';

type AuthFormProps = {
    showName?: boolean
    submitLabel: string
    onSubmit: (email: string, password: string, name?: string) => void
};

export function AuthForm(props: AuthFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="auth-form" onSubmit={(e) => {
            props.onSubmit(email, password, name);
            e.preventDefault();
        }}>
            {
                props.showName && (<FormInput label="Name" value={name} required={true} onChange={(e) => setName(e.target.value)} />)
            }
            <FormInput label="Email" value={email} required={true} onChange={(e) => setEmail(e.target.value)} />
            <FormInput label="Password" type="password" required={true} value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
            <Button className="auth-form__submit" type="submit" btnStyle="primary" label={props.submitLabel} />
        </form>
    );
}