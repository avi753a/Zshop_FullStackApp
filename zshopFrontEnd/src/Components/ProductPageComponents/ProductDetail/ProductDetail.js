import { LinearProgress, Rating, ratingClasses } from "@mui/material";
import "./ProductDetail.scss";
import { dark } from "@mui/material/styles/createPalette";
import { ProgressBar } from "react-bootstrap";
import ColorCircle from "../../ShopPageComponents/ColorCircle/ColorCircle";
import { useState } from "react";
export function ProductDetail() {
    let ratingValue = 5;
    let percentageLeft = 9;
    const [activeColorId, setActiveColorId] = useState(null);
    const [QunatityCount, setQuantityCount] = useState(0);
    const [showMiniCart, MiniCart] = useState(false);
    let views = 34;
    const colors = [
        { id: 1, r: 255, g: 0, b: 0 },    // Red
        { id: 2, r: 0, g: 255, b: 0 },    // Green
        { id: 3, r: 0, g: 0, b: 255 },    // Blue
    ]

    return (
        <>
            <div className="product-detail w-100 d-flex flex-row align-items-start justify-content-between">
                <div className="w-40 product-image-container">
                    <img className="product-image" src="/images/image5.png"></img>
                </div>
                <div className="product-info w-50 d-flex flex-column align-items-start justify-content-start">
                    <div className="product-name d-flex w-100 flex-row align-items-start justify-content-between mt-3">
                        <h4 className="font-heading m-0 mb-1 ">Denim Jacket</h4>
                        <span className="icon-star fs-5 "></span>
                    </div>
                    <Rating name="read-only" value={ratingValue} readOnly size="small" />
                    <div className="product-price d-flex flex-row align-items-start justify-content-start gap-10 my-3">
                        <h4 className="font-heading">$58</h4>
                        <h6 className="font-heading"><s>$70</s></h6>
                        <div className="rounded-4 discount bg-alert p-1 px-2 "><p className="m-0 text-light fs-7" >SAVE 33%</p></div>
                    </div>
                    <div className="views d-flex flex-row align-items-start justify-content-start mb-2">
                        <span className="icon-eye fs-6 pt-1"></span><p className="m-0">&nbsp;&nbsp;{views} people are viewing this right now</p>
                    </div>
                    <div className="quantity-left w-100 d-flex flex-column align-items-start justify-content-start mb-3">
                        <p className="fs-7 m-0">Only 9 left in stock!</p>
                        <ProgressBar className="w-90" variant="alert" now={40} style={{ height: '10px' }} size="small" />
                    </div>

                    <div className="size d-flex flex-column align-items-start justify-content-start mb-3">
                        <p className="font-heading m-0 mb-2"><b>Size:&nbsp;</b>{" M"}</p>
                        <div className="avilable-sizes d-flex flex-row align-items-start justify-content-start gap-10">
                            <button className="btn btn-dark">M</button>
                            <button className="btn btn-light">L</button>
                            <button className="btn btn-light">XL</button>
                            <button className="btn btn-light">XXL</button>

                        </div>
                    </div>

                    <div className="color d-flex flex-column alig-items-start justify-content-start ">
                        <p className="mb-2 m-0 font-heading">
                            <b>Color:&nbsp;</b>{"Blue"}</p>
                        <div className="avilable-sizes d-flex flex-row align-items-start justify-content-start gap-10 mt-2">
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
                    <div className="order-input-container w-100 d-flex flex-column align-items-start justify-content-start mb-5">
                        <p className="font-heading"><b>Qunatity</b></p>
                        <div className="order-input w-100 d-flex flex-row align-items-start justify-content-between w-100">
                            <div className="quantity-input d-flex flex-row align-items-start justify-content-start">
                                <button
                                    className="btn btn-light btn-decrement"
                                    onClick={() => setQuantityCount(QunatityCount - 1)}
                                    disabled={QunatityCount === 0}
                                >
                                    -
                                </button>
                                <button className="btn btn-light btn-qunatity" disabled>
                                    {QunatityCount}
                                </button>
                                <button
                                    className="btn btn-light btn-increment"
                                    onClick={() => setQuantityCount(QunatityCount + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button className="btn btn-light w-70 font-heading add-to-cart-button">Add to Cart</button>
                        </div>
                        <button className="w-100 btn btn-dark font-heading m-3">Check Out</button>
                    </div>
                    <div className="quries w-100 d-flex flex-row align-items-start justify-content-start mb-3">
                        <div className="question d-flex flex-row me-4">
                            <span className="icon-question me-2 fs-5"></span>
                            <p>Ask a Question</p>
                        </div>
                        <div className="share d-flex flex-row">
                            <span className="icon-share me-2 fs- pt-1"></span>
                            <p>Share</p>
                        </div>
                    </div>
                    <div className="delivary-details d-flex flex-column align-items-start justify-content-center">
                        <div className="delivary-date d-flex flex-row gap-10 mb-2">
                            <i className="icon-truck fs-6 pt-1"></i>
                            <p className="m-0"><b>Estimated Delivary: </b>Jul-30 - Jul-31</p>
                        </div>
                        <div className="delivary-price d-flex flex-row gap-10">
                            <i className="icon-package fs-5 pt-0"></i>
                            <p><b>Estimated Delivary: </b>On all orders over $75</p>
                        </div>

                    </div>
                </div>
                <div className={`floating-div flex-column align-items-start justify-content-between w-40 bg-light ps-4  ${showMiniCart ? 'd-flex' : 'd-none'}`}>
                    <div>
                    <h1 className="mini-cart-heading font-heading mt-3 m-0 mb-2">Shopping Cart</h1>
                    <p>Buy $122.35 more and get Free Shipping</p>
                    <div className="mini-product d-flex flex-row align-items-start justify-content-start w-100">
                        <img className="mini-product-image" src="/images/image5.png"></img>
                        <div className="mini-product-details ms-2 w-60 d-flex flex-column align-items-start justify-content-start">
                            <p className="product-name m-0 "><b>Red Dress</b></p>
                            <p className="m-0 fs-7" >Color:{"Red"}</p>
                            <p className="fs-7 m-0">Price: ${"14.20"}</p>
                            <div className="quantity-input d-flex flex-row align-items-start justify-content-start">
                                <button
                                    className="btn btn-light btn-decrement"
                                    onClick={() => setQuantityCount(QunatityCount - 1)}
                                    disabled={QunatityCount === 0}
                                >
                                    -
                                </button>
                                <button className="btn btn-light btn-qunatity" disabled>
                                    {QunatityCount}
                                </button>
                                <button
                                    className="btn btn-light btn-increment"
                                    onClick={() => setQuantityCount(QunatityCount + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="w-100"/>
                    </div> 
                    <div className="w-100">
                        <hr className="w-100" />
                        <div className="total d-flex flex-row align-itemms-start justify-content-between w-100 mb-2">
                            <p className="font-heading m-0">Sub Total</p>
                            <p className="font-heading m-0">{"19.10"}</p>
                        </div>
                        <button className="btn btn-dark w-100 mb-2">Check Out</button>
                        <h6 className="font-heading mb-4"><u>View Cart</u></h6>
                    </div>
                </div>
            </div>
        </>
    );
}