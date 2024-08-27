import React, { useState } from "react";
import "./Art.css";

import Covid from "/images/art/COVID.png";
import GHouse from "/images/art/GHouse copy.png";
import WHouse from "/images/art/WHouse copy.png";
import Amaryllis from "/images/art/Amaryllis copy.png";
import Fence from "/images/art/IMG_8303 copy.jpg";
import Lives from "/images/art/387072_Lives.png";
import Tito from "/images/art/IMG_1448 copy.jpg";
// Import more images as needed...

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const artData = [
    {
      src: Tito, // Using imported images
      alt: "Tito",
      name: "Tito",
      description: "Tito description",
    },
    {
      src: Lives, // Using imported images
      alt: "Lives",
      name: "Lives",
      description: "Lives description",
    },
    {
      src: Fence, // Using imported images
      alt: "Fence",
      name: "Fence",
      description: "Fence description",
    },
    {
      src: Amaryllis, // Using imported images
      alt: "Amaryllis",
      name: "Amaryllis",
      description: "Flower description",
    },
    {
      src: WHouse, // Using imported images
      alt: "White House",
      name: "White House",
      description: "White House description",
    },
    {
      src: GHouse, // Using imported images
      alt: "House",
      name: "House",
      description: "House description",
    },
    {
      src: Covid, // Using imported images
      alt: "COVID",
      name: "COVID",
      description: "COVID description",
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
            {/*
            <div className="caption">
              {selectedImage.description}
              <h2 className="art-name">{image.name}</h2>{" "}
              
              <p className="art-description">{image.description}</p>{" "}
              
            </div>*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;
