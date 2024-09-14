import React, { useState } from 'react'
import ColorCircle from '../ColorCircle/ColorCircle';
import "./ProductItem.scss";

export default function ProductItem() {
    const colors = [
        { id: 1, r: 255, g: 0, b: 0 },    // Red
        { id: 2, r: 0, g: 255, b: 0 }];
    const [activeColorId, setActiveColorId] = useState(null);

    return (
        <div className='product-item d-flex flex-column align-items-start justify-content-start mb-3'>
            <div className='product-image-container w-90 h-75 mb-2 d-flex align-items-start justify-content-start'>
                <img className='product-image' src='/images/product/1.png' />
            </div>
            <div className="product-info">
                <p className="fs-5 font-heading m-0 mb-2">Red Dress</p>
                <p className='fs-6 m-0 mb-2 product-price'>$18.90</p>
                <div className="product-colors d-flex flex-row gap-10 flex-wrap align-items-start justify-content-start">
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
        </div>
    )
}
