import React from 'react';

const ImageAnimation = () => {
  const [position, setPosition] = React.useState(0);

  const moveLeft = () => {
    setPosition(position - 50);
  };

  const moveRight = () => {
    setPosition(position + 50);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "green", color: "white" }}>
        Image Animation
      </h1>

      <div
        style={{
          width: "100%",
          height: "250px",
          overflow: "hidden"
        }}
      >
        <img
          src="https://images.pexels.com/photos/639086/pexels-photo-639086.jpeg?cs=srgb&dl=beautiful-beautiful-flowers-bloom-639086.jpg&fm=jpg"
          alt="flower"
          style={{
            height: "200px",
            width: "200px",
            transform: `translateX(${position}px)`,
            transition: "transform 0.5s ease"
          }}
        />
      </div>

      <button onClick={moveLeft}>Left</button>
      <button onClick={moveRight}>Right</button>
    </div>
  );
};

export default ImageAnimation;