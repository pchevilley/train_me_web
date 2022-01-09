import './AuthFormContainer.css';

type AuthFormContainerProps = {
    title?: string
    children?: any
};

export function AuthFormContainer(props: AuthFormContainerProps) {
    return (
        <section className="auth-form-container">
            {props.title && (
                <h1 className="auth-form-container__title">{props.title}</h1>
            )}
            {props.children}
        </section>
    );
}