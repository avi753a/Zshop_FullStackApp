import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import "./CartDetails.scss";

export default function CartDetails() {
    const [count, setCount] = useState(1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    // Function to increment count
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className='cart-details-container d-flex flex-column align-items-center justify-content-start w-100'>
            <h1 className='font-heading'>Shopping Cart</h1>
            <Table striped hover className='d-none d-sm-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Product</th>
                        <th style={{ textAlign: 'left' }}>Price</th>
                        <th>Quantity</th>
                        <th style={{ textAlign: 'right' }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''>
                        <td style={{ textAlign: 'left' }}>
                            <div className='d-flex flex-row align-items-start justify-content-start'>
                                <div className="image-container me-3">
                                    <img src="/images/image3.png" alt="" className="mini-product-image" />
                                </div>
                                <div className="data">
                                    <p className="font-heading m-0 fs-6">Red Jacket</p>
                                    <p className='m-0 fs-7 m-0 mb-3'>Color: {"Red"}</p>
                                    <p className='fs-7 m-0'><u>Remove</u></p>
                                </div>
                            </div>
                        </td>
                        <td style={{ textAlign: 'left' }}>$10.00</td>
                        <td>2</td>
                        <td style={{ textAlign: 'right' }}>$20.00</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </Table>
            <div className="cart-item-table d-flex d-sm-none d-flex flex-column align-items-start justify-content-center w-100">
                <div className="cart-item-row w-100 d-flex flex-column align-items-start justify-content-start p-2">
                    <div className="mini-product-container w-100  d-flex flex-row align-items-start justify-content-between mb-2">
                        <div className="product-image w-50  align-items-center justify-content-center ">
                            <img src="/images/image5.png" alt="Product Image" className='product-image-sm' />
                        </div>
                        <div className="product-details w-50 h-100 h-auto d-flex flex-column align-items-start justify-content-start ps-2">
                            <p className='m-0'>Name</p>
                            <p className='m-0 mb-2'><b>Red Jacket</b></p>
                            <p className='m-0'>Color</p>
                            <p className='m-0 mb-2'><b>Red</b></p>
                            <p className='align-self-center justify-self-end'> Remove</p>

                        </div>
                    </div>
                    <div className="w-100 d-flex flex-row align-items-start justify-content-between ps-1 mb-1">
                        <p className='fs-7 m-0'>Price</p>
                        <p className='fs-7 m-0'><b>$10.00</b></p>
                    </div>
                    <div className="item-quantity d-flex flex-row align-items-start justify-content-between w-100 ps-1 mb-1">
                        <p className='fs-7 m-0'>Qunatity</p>
                        <div className="qnatnity-option d-flex flex-row align-items-end justify-content-end">
                            <button className='btn btn-light fs-7 m-0' onClick={decrement} disabled={count <= 0}>-</button>
                            <button className='btn btn-light fs-7 m-0' disabled>{count}</button>
                            <button className='btn btn-light fs-7 m-0' onClick={increment}>+</button>
                        </div>
                    </div>
                    <div className="w-100 d-flex flex-row align-items-start justify-content-between ps-1">
                        <p className='fs-7 m-0'>Total</p>
                        <p className='fs-7 m-0'><b>$30.00</b></p>
                    </div>


                </div>

            </div>
            <div className="total-container d-flex flex-column align-items-start justify-content-center px-1 align-self-end">
                <div className='d-flex flex-row align-items-start justify-content-between w-100 '>
                    <p>Sub Total</p>
                    <p>100$</p>
                </div>
                <button className='btn btn-dark w-100'>Check Out</button>

            </div>

        </div>
    )
}
