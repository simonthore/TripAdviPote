import tripadvipotes from "../assets/tripadvipote.png";
import "../assets/css/components/Header.css";
export default function Header() {
    return (
        <>
            <div className="container">
                <div className="full-logo">
                    <div className="very-full-logo">
                        <img
                            src={tripadvipotes}
                            className="logo"
                            alt="Vite logo"
                        />
                        <h1 className="site-title">TripAdviPotes</h1>
                    </div>
                    <p className="slogan">"Des potes, des notes"</p>
                </div>
                <button className="connection">connectez-vous</button>
            </div>
        </>
    );
}
