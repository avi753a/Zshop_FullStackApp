import "./SizeFilter.scss";
import React from 'react'

export default function SizeFilter() {
  return (
    <div className="size-filter d-flex flex-column align-items-start justify-content-start mb-2">
    <p className="m-0 mb-2">Size</p>
    <div className="size-container d-flex flex-row flex-wrap align-items-start justify-content-between gap-10 ">
        <button className="btn btn-light btn-sm size-button">S</button>
        <button className="btn btn-light btn-sm size-button">M</button>
        <button className="btn btn-light btn-sm size-button">L</button>
        <button className="btn btn-light btn-sm size-button">XL</button>
    </div>
</div>
  )
}
