import React, { useState /* useEffect */ } from "react";
import Photo from "./1x.png";
import "./Picture.css";
import axios from "axios";
export default function picture() {
  const [photoItem, setPhotoItem] = useState("");
  //  const [imageContainer, setImageContainer] = useState([]);

  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);
    data.append("album", "bW8ql2K");
    data.append("title", image.name);
    console.log("dataget", data.get("image"));
    const res = await axios({
      method: "POST",
      url: "https://api.imgur.com/3/image",
      data,
      headers: {
        Authorization: process.env.REACT_APP_IMGUR_TOKEN,
      },
    });
    setPhotoItem(res.data.data.link);
    console.log("res>", res);
  };

  const load = async () => {
    const imageContain = await axios({
      method: "GET",
      url: "https://api.imgur.com/3/album/{bW8ql2K}",
      headers: {
        Authorization: process.env.REACT_APP_IMGUR_CLIENT_ID,
      },
    });
    console.log("imageContain>>>>>", imageContain);
  }; /*
  useEffect(() => {
    load();
  }, [photoItem]); */

  return (
    <div className="main">
      <div className="imgurcontainer" onClick={load}>
        123
      </div>
      <div className="main-container">
        <div className="container-in-picture">
          <div className="picture">
            <label htmlFor="upload-button">
              <img
                className="img-in-picture"
                src={`${!photoItem ? Photo : photoItem}`}
              />
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
