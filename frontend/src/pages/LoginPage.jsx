import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import carImage from "/carImage.png";
import {
  EyeIcon as EyeSolid,
  EyeSlashIcon as EyeSlashSolid,
} from "@heroicons/react/24/solid";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (!username.trim() || !password) {
      setError("Please enter both username and password");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", {
        username: username.trim(),
        password,
      });

      // Save user data to localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirect to dashboard or home page
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div
        className="m-0 p-0 h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          placeContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleLogin}>
        <div
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
            padding: "20px",
            width: "360px",
            height: "390px",
            marginTop: "145px",
            placeContent: "center",
            justifyItems: "center",
            boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
          }}
        >
          <img
            src="https://www.gravatar.com/avatar/?d=mp"
            alt="Default Avatar"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              marginTop: "-100px",
            }}
          />
          <h2
            className="font-pathway"
            style={{
              fontSize: "36px",
              marginTop: "0",
            }}
          >
            LOGIN
          </h2>
          
          {error && (
            <div style={{
              color: "#f13f3f",
              backgroundColor: "#ffebee",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px 0",
              fontSize: "16px"
            }}>
              {error}
            </div>
          )}
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            style={{
              backgroundColor: "#D9D9D9",
              fontFamily: '"Pathway Gothic One", sans-serif',
              fontSize: "18px",
              textAlign: "center",
              border: error ? "1px solid #f13f3f" : "none",
              borderRadius: "5px",
              padding: "10px",
              width: "300px",
              marginBottom: "10px",
              boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              opacity: isLoading ? 0.7 : 1,
            }}
          />
          <br />
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              type={showPwd ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              style={{
                backgroundColor: "#D9D9D9",
                fontFamily: '"Pathway Gothic One", sans-serif',
                fontSize: "18px",
                textAlign: "center",
                border: error ? "1px solid #f13f3f" : "none",
                borderRadius: "5px",
                padding: "10px",
                width: "300px",
                marginBottom: "10px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              }}
            />
            {password && (
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "23px",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 100,
                }}
              >
                {showPwd ? (
                  <EyeSlashSolid
                    style={{ width: 18, height: 18, color: "rgb(0 0 0 / .7)" }}
                  />
                ) : (
                  <EyeSolid
                    style={{ width: 18, height: 18, color: "rgb(0 0 0 / .7)" }}
                  />
                )}
              </button>
            )}
          </div>
          <br />
          <button
            type="submit"
            id="login"
            disabled={isLoading}
            style={{
              backgroundColor: "#3F86F1",
              fontFamily: '"Pathway Gothic One", sans-serif',
              fontSize: "18px",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              width: "320px",
              margin: "10px 0",
              boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <br />
          <a
            href="#"
            style={{
              fontFamily: '"Pathway Gothic One", sans-serif',
              textDecoration: "none",
              color: "rgb(0 0 0 / .7)",
            }}
          >
            Forgot your password?
          </a>
          <br />
          <p
            style={{
              fontFamily: '"Pathway Gothic One", sans-serif',
              color: "rgb(0 0 0 / .7)",
            }}
          >
            OR
          </p>
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
            Create an Account
          </button>
        </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
