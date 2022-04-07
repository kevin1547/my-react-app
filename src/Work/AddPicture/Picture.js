import React from "react";
import Photo from "./1x.png";
import "./Picture.css";
export default function picture() {
  return (
    <main>
      <div className="main-container">
        <div className="container-in-picture">
          <div className="picture">
            <img src={Photo}></img>
            <div className="drop">
              Drag and drop up to 10 images
              <div className="words2">
                or <span className="UBNiJ"> Browse </span>to choose a file
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
