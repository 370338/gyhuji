/*
import React from "react";
import "./Art.css";

const Art = () => {
  return (
    <div className="art-page">
      <h1>Art's Page</h1>
      <p>Welcome to Art page!</p>
    </div>
  );
};

export default Art;
*/

/*
import React, { useState } from "react";
import "./Art.css";

const artData = [
  {
    src: "/images/art/COVID.png", // Use direct path relative to the public directory
    alt: "COVID",
    description: "Covid description",
  },
  {
    src: "/images/art/387072_Lives.png", // Use direct path relative to the public directory
    alt: "Lives",
    description: "Lives description",
  },
  // Add more images as needed
];

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {artData.map((image, index) => (
          <div
            key={index}
            className="art-container"
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <div id="caption">{selectedImage.description}</div>
        </div>
      )}
    </div>
  );
};

export default Art;
*/

import React, { useState } from "react";
import "./Art.css";

/*
const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artData = [
    {
      src: "/public/images/art/COVID.png", // Direct path relative to the public folder
      alt: "COVID",
      description: "COVID description",
    },
    {
      src: "/public/images/art/387072_Lives.png", // Direct path relative to the public folder
      alt: "Lives",
      description: "Lives description",
    },
    // Add more images here as needed
  ];
  */
// Import images directly
import Covid from "../../public/images/art/COVID.png";
import Lives from "../../public/images/art/387072_Lives.png";
// Import more images as needed...

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artData = [
    {
      src: Covid, // Using imported images
      alt: "COVID",
      description: "COVID description",
    },
    {
      src: Lives, // Using imported images
      alt: "Lives",
      description: "Lives description",
    },
    // Add more images as needed
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {artData.map((image, index) => (
          <div
            key={index}
            className="art-container"
            onClick={() => openModal(image)}
          >
            {/* Directly using <img> tags with static paths */}
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <div className="modal-content-container">
            <img
              className="modal-content"
              src={selectedImage.src}
              alt={selectedImage.alt}
            />
            <div className="caption">{selectedImage.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;
