import { Link } from "react-router-dom";
import LoginButton from "./LoginButton"; // adjust path if needed

function Header() {
  // Simulated user data; replace with your actual user state or Firebase auth
  const user = {
    name: "Jude Christian Amoguis",
    email: "juan@example.com",
    photo: "/frontend/public/jude.jpg", // user profile picture
  };

  let displayName = "Guest";
  let userPhoto = "/frontend/public/jude.jpg"; // fallback icon

  if (user) {
    displayName = user.name || user.email || "Guest";
    if (user.photo) {
      userPhoto = user.photo;
    }
  }

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
      {/* Left: Logo */}
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

      {/* Right: User Info with Picture */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "rgba(220,38,38,1)",
          fontFamily: '"Merriweather", serif',
          fontSize: "15px",
          fontWeight: "bold",
          fontStyle: "italic",
          textShadow: ".1px .1px 0 rgba(255,255,255,1)",
        }}
      >
        {/* User Profile Picture */}
        <img
          src={userPhoto}
          alt="User Profile"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid gray",
          }}
        />
        <span>{displayName}</span>
      </div>
    </header>
  );
}

export default Header;
