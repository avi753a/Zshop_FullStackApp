import CheckoutDetails from "../../Components/CheckOutComponents/CheckOutDetails/CheckOutDetails";
import { NavBar } from "../../Components/Navbar/Navbar";

export function CheckOutPage(){
    return(
        <>
         
            <div className="checkout my-3 d-flex flex-column align-items-center justify-content-start">
                <div className="navbar col-10 mx-auto mb-4">
                    <NavBar />
                </div>
                <div className="checkout-main col-10 mx-auto">
                    <CheckoutDetails/>
                </div>
            </div>
        </>
    );
    
}