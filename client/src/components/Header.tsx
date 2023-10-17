import tripadvipote from "../assets/tripadvipote.png";
import "../assets/css/components/Header.css";
export default function Header() {
    return (
        <>
            <div className="container">
                <img src={tripadvipote} className="logo" alt="Vite logo" />
                <h1 className="site-title">TripAdviPote</h1>
                <p className="slogan">"Des potes, des notes"</p>
            </div>
        </>
    );
}
