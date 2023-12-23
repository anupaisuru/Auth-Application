import React from "react";
import "../css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <div className="l-btn">
          <Link to="/home" className="hl">
            Home
          </Link>
          {isLoggedIn && (
            <button className="lo-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
