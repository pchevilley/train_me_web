import './SocialAuth.css';
import { SocialButton } from './SocialButton';

type SocialAuthProps = {};
export function SocialAuth(props: SocialAuthProps) {
    return (
        <section className="social-auth">
            <span></span>
            <SocialButton onClick={() => {}} icon="google" />
            <SocialButton onClick={() => {}} icon="facebook-f" />
            <SocialButton onClick={() => {}} icon="strava" />
            <span></span>
        </section>

    );
}