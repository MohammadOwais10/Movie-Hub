import React from "react";
import GrainIcon from "@mui/icons-material/Grain";
import "./Header.css";
import MovieIcon from "@mui/icons-material/Movie";
import CategoryIcon from "@mui/icons-material/Category";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header-logo">
        <GrainIcon
          style={{
            width: "100px",
            height: "50px",
            color: "rgb(36 233 168)",
          }}
        />
      </div>

      <Link to="/movie">
        <div
          className={
            location.pathname === "/movie"
              ? "header-item on-route"
              : "header-item"
          }
        >
          <MovieIcon />
          <p>Home</p>
        </div>
      </Link>

      <Link to="#">
        <div
          className={
            location.pathname === "/Language"
              ? "header-item on-route"
              : "header-item"
          }
        >
          <CategoryIcon />
          <p>Language</p>
        </div>
      </Link>

      <Link to="#">
        <div
          className={
            location.pathname === "/genre"
              ? "header-item on-route"
              : "header-item"
          }
        >
          <ViewAgendaIcon />
          <p>Genre</p>
        </div>
      </Link>

      <Link to="/">
        <div
          className={
            location.pathname === "/" ? "header-item on-route" : "header-item"
          }
        >
          <LockOpenIcon />
          <p>Account</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
