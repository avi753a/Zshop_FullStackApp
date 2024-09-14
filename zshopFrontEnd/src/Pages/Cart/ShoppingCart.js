import CartDetails from "../../Components/CartComponents/CartDetails/CartDetails";
import { NavBar } from "../../Components/Navbar/Navbar";

export function ShoppingCart() {
    return (
        <>
            <div className="cart my-3 d-flex flex-column align-items-center justify-content-start">
                <div className="navbar col-10 mx-auto mb-4">
                    <NavBar />
                </div>
                <div className="cart-main col-10 mx-auto">
                    <CartDetails/>
                </div>
            </div>
        </>
    );
}