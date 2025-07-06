import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage () {
    return <>
        Register

        <Link to="/register-next">
            <button
              id="createAccount"
              style={{
                backgroundColor: "#F13F3F",
                fontFamily: '"Pathway Gothic One", sans-serif',
                fontSize: "18px",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                width: "320px",
                marginBottom: "30px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              }}
            >
              Next
            </button>
          </Link>
    </>
}