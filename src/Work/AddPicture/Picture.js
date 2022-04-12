// import React, { useState } from "react";
import Photo from "./1x.png";
import "./Picture.css";
export default function picture() {
  //  const [imgUrl, setImgUrl] = useState("");
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);
    data.append("aldum", "vOVkBWW");
    data.append("title", image.name); /*
    const res = await callUploadPhoto(data);
    setImgUrl(res.data.data.link); */
  };
  return (
    <div className="main">
      <div className="main-container">
        <div className="container-in-picture">
          <div className="picture">
            <label htmlFor="upload-button">
              <img src={Photo}></img>
            </label>
            <input
              id="upload-button"
              type={"file"}
              style={{ display: "none" }}
              onChange={onFileUpload}
            />
            <div className="drop">
              Drag and drop up to 10 images
              <div className="words2">
                or <span className="UBNiJ"> Browse </span>to choose a file
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
