import { useNavigate } from "react-router-dom";

const FrontPanel = () => {
    const navigate = useNavigate();

    return(
        <div className="frontPanel">
            <video src="/videos/galaxy.mp4" autoPlay loop muted playsInline poster="images/poster.png"></video>
            <h1 className="mainText">MOVIE PLANET</h1>
            <h2 className="secondaryText">Start Browsing Now</h2>
            <button onClick={() => navigate("/movies")}>Get Started</button>
        </div>
    )
}

export default FrontPanel;