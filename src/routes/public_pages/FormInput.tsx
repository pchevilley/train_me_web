import './FormInput.css';
import { ChangeEvent } from 'react';

type FormInputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    label: string
    value: string
    type?: string
    required?: boolean
    autoComplete?: string
};

export function FormInput(props: FormInputProps) {
    return (
        <label className="form-input">
            {props.label}
            <input 
                className="form-input__input"
                required={props.required}
                type={props.type || 'text'}  
                name={props.label} 
                value={props.value} 
                autoComplete={props.autoComplete}
                onChange={props.onChange}/>
        </label>
    );
}