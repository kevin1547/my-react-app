import React from "react";
import { Link } from "react-router-dom";
import "./Switch.css";
import LinkComponent from "../../components/Link/LinkComponent";

export default function Switch() {
  return (
    <main>
      <div className="main-container-in-switch">
        <div className="container-in-switch">
          <div className="btn-in-switch">
            <Link to="/">
              <button className="button-in-counter home">home</button>
            </Link>
            <LinkComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
