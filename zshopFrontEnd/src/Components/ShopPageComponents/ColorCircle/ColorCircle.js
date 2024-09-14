import React from 'react';

const ColorCircle = ({ r, g, b, colorId, isActive, setActiveColorId }) => {
  const handleClick = () => {
    setActiveColorId(colorId);  // Directly update active color ID
  };

  const circleStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    borderRadius: '50%',
    cursor: 'pointer',
    border: isActive ? '2px solid black' : 'none', // Add border when active
  };

  return (
    <div
      style={circleStyle}
      onClick={handleClick}
    />
  );
};

export default ColorCircle;
