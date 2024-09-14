import Slider from "react-slick";
import ColorCircle from "../ColorCircle/ColorCircle";
import "./ColorFilter.scss";
import React from 'react'
import { useState } from "react";

export default function ColorFilter() {
  const [activeColorId, setActiveColorId] = useState(null);

  const colors = [
    { id: 1, r: 255, g: 0, b: 0 },    // Red
    { id: 2, r: 0, g: 255, b: 0 },    // Green
    { id: 3, r: 0, g: 0, b: 255 },    // Blue
    { id: 4, r: 255, g: 255, b: 0 },  // Yellow
    { id: 5, r: 255, g: 165, b: 0 },  // Orange
    { id: 6, r: 128, g: 0, b: 128 },  // Purple
    { id: 7, r: 0, g: 255, b: 255 },  // Cyan
    { id: 8, r: 255, g: 192, b: 203 },// Pink
    { id: 9, r: 165, g: 42, b: 42 },  // Brown
    { id: 10, r: 128, g: 128, b: 128 },// Gray
    { id: 11, r: 0, g: 128, b: 0 },   // Dark Green
    { id: 12, r: 75, g: 0, b: 130 },  // Indigo
    { id: 13, r: 240, g: 230, b: 140 },// Khaki
    { id: 14, r: 255, g: 20, b: 147 } // Deep Pin
    // Add more colors as needed
  ];
  return (
    <>
      <div className="colour-filter d-flex flex-column align-items-start justify-content-start mb-2">
        <p className="m-0 mb-2">Colours</p>
        <div  className="color-container d-flex gap-10 flex-row flex-wrap">
          {colors.map((color) => (
            <ColorCircle
              key={color.id}
              colorId={color.id}
              r={color.r}
              g={color.g}
              b={color.b}
              isActive={activeColorId === color.id}
              setActiveColorId={setActiveColorId}
            />
          ))}
        </div>
     
      </div>
    </>
  );

}
