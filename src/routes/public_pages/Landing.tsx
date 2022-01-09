import './Landing.css';
import img from '../../assets/app-screenshot.svg';

export function Landing() {
    return <section className="landing">
        <div className="landing__text">
            <h1 className="landing__text__h1">Manage your club <br/> Improve your performances</h1>
            <p>Add members, create training plans, follow your athletes and much more...</p>
        </div>
        <div className="landing__images">
            <img className="landing__images__img landing__images__1" src={img} alt="" />
            <img  className="landing__images__img landing__images__2" src={img} alt="" />
        </div>
    </section>;
}