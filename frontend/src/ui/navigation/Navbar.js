import { Link } from "react-router-dom";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const [className, setClassName] = useState("navbar");

  useEffect(() => {
    if (location.pathname === "/") {
      setClassName("navbar transparent");
    } else {
      setClassName("navbar");
    }
  }, [location]);

  return (
    <div className={className}>
      <div className="utilityBar">
        <Link className="link" to="/">
          <div className="logo">
            <MovieFilterIcon fontSize="large" />
            <div className="logoInscription">MoviePlanet</div>
          </div>
        </Link>
        <div className="menu">
          <Link className="link" to="/movies">
            Movies
          </Link>
          <Link className="link" to="/people">
            People
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
