import { NavBar } from "../../Components/Navbar/Navbar";
import { ProductDetail } from "../../Components/ProductPageComponents/ProductDetail/ProductDetail";

export function Product(){
    return(
        <>
            <div className="product-container my-3 d-flex flex-column align-items-center justify-content-start">
                <div className="navbar col-10 mx-auto mb-5">
                    <NavBar />
                </div>
                <div className="products-detail col-10">
                    <ProductDetail />
                </div>
            </div>
        </>
    );
}