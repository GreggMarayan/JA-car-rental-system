import { Link } from "react-router-dom";
import LoginButton from "./LoginButton"; // adjust your path if needed

function Header() {
  return (
    <header
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        height: "105px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ lineHeight: "1", marginLeft: "30px" }}>
          <p
            style={{
              fontFamily: '"Merriweather", serif',
              fontSize: "36px",
              color: "#FF0000",
              fontStyle: "italic",
              fontWeight: "bolder",
              textShadow: "1.5px 1.5px 0 rgba(255,255,255,1)",
              left: "60px",
              margin: 0,
            }}
          >
            J&amp;A
          </p>
          <p
            style={{
              fontFamily: '"Merriweather", serif',
              fontSize: "18px",
              color: "#FF0000",
              fontStyle: "italic",
              fontWeight: "bolder",
              textShadow: ".5px .5px 0 rgba(255,255,255,1)",
              margin: 0,
            }}
          >
            CAR RENTAL
          </p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
