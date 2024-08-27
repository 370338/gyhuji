// Owen.jsx
import React from "react";
import "./Owen.css";
import owenImage from "/images/Owen_Bio_Half2.png"; // Ensure you have an image file named owen.jpg in the public/images directory

const Owen = () => {
  return (
    <div className="owen-page">
      <div className="owen-container">
        <div className="image-container">
          <img src={owenImage} alt="Owen Beedle" className="owen-image" />
        </div>
        <div className="bio-container">
          <h1>Owen Beedle</h1>
          <p>
            Born and raised in Portland, Oregon since 2003, Owen Beedle
            developed a passion for creativity and technology early on. After
            graduating from Cleveland High School, he balanced work at the
            Waverley Country Club with friends, while painting and reselling
            vintage clothing, nurturing his entrepreneurial spirit.
          </p>
          <p>
            Owen is currently pursuing a degree in business and computer science
            at the University of Oregon. His academic journey is marked by a
            blend of artistic and technological endeavors, aligning with his
            vision to fund future creative projects. As the president of the
            Oregon Blockchain Group (OBG), he is at the forefront of innovative
            blockchain initiatives, driving awareness and adoption within the
            university community.
          </p>
          <p>
            Outside of his academic commitments, Owen designs websites and
            collaborates on start-up ventures with fellow students. His
            dedication to blending art, technology, and business showcases his
            dynamic skill set and ambition to create impactful, forward-thinking
            projects.
          </p>
          {/* Add more biography content here */}
        </div>
      </div>
    </div>
  );
};

export default Owen;
