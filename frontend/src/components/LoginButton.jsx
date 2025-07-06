import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to="/login">
      <button
        className="w-[80px] h-[30px] p-[5px] text-[20px]"
        style={{
          backgroundColor: "#F13F3F",
          borderRadius: "10px",
          color: "white",
          border: "none",
          padding: "0px 2px",
          cursor: "pointer",
          position: "absolute",
          top: "35px",
          right: "40px",
          fontFamily: '"Pathway Gothic One", sans-serif',
          fontWeight: "bold",
        }}
      >
        Login
      </button>
    </Link>
  );
}
