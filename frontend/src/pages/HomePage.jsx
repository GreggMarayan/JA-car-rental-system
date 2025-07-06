import React from "react";
import Header from "../components/Header";
import LoginButton from "../components/LoginButton";
import carImage from "/carImage.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div
        className="m-0 p-0 h-screen"
        style={{
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          placeContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <LoginButton />

        <div
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.6)",
            borderRadius: "20px",
            width: "600px",
            marginTop: "-180px",
            textShadow: "1px 1px 0 rgba(255,255,255,1)",
            fontStyle: "none",
            fontWeight: "bold",
          }}
        >
          <div>
            <h1 className="text-[60px] font-bold">Welcome to</h1>
            <h1 className="text-[72px] font-extrabold">J&A Car Rental</h1>
          </div>
        </div>
        <div>
          <h1
            className="text-[96px] text-[#F13F3F] font-semibold"
            style={{
              fontStyle: "italic",
              textShadow: "2px 2px 0 rgba(255,255,255,1)",
              position: "absolute",
              left: "120px",
              bottom: "20px",
            }}
          >
            Let's get you
          </h1>
          <h1
            className="text-[96px] text-[#F13F3F] font-extrabold"
            style={{
              fontStyle: "italic",
              textShadow: "2px 2px 0 rgba(255,255,255,1)",
              position: "absolute",
              right: "210px",
              bottom: "-80px",
            }}
          >
            on the ROAD
          </h1>
          <Link to="/book-now">
            <button
              style={{
                position: "absolute",
                bottom: "-40px",
                right: "60px",
                backgroundColor: "lightgray",
                color: "black",
                fontFamily: '"Pathway Gothic One", sans-serif',
                fontSize: "18px",
                fontWeight: "bold",
                border: "2px solid #ffffff",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                zIndex: 1000,
              }}
            >
              Book Now →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
