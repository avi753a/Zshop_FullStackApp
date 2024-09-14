import { NavBar } from "../../Components/Navbar/Navbar";
import { Products } from "../../Components/ShopPageComponents/Products/Products";
import "./Shop.scss";
import React from 'react'

export default function Shop() {
    return (
        <>
        
            <div className="shop-container my-3 d-flex flex-column align-items-center justify-content-start">
                <div className="navbar col-10 mx-auto mb-5">
                    <NavBar />
                </div>
                <div className="products col-10">
                    <Products />
                </div>
            </div>
        </>
    )
}
