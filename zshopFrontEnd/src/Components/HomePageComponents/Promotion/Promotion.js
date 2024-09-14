import "./Promotion.scss";
export function Promotion() {
    return (
        <>
       
          <div className="promotionContainer d-flex flex-sm-row flex-column ">
            <div className="promotionImageContainer promotion-part align-items-start d-flex align-items-sm-center justify-content-center">
                <img className="w-70 promotionImage" src="/images/image9.png" />
            </div>
            <div className="diagonal-line-container d-none d-sm-flex w-10">

            </div>
            <div className="promotionInfo promotion-part bg-primary-background d-flex flex-column justify-content-center align-items-start">
                <div className="promotionDetails d-flex flex-column align-items-start w-90  ms-4 my-4">
                    <small> Women Collection</small>
                    <h1 className="font-heading fw-500 mt-2">Peaky Blinders</h1>
                    <p className="descriptionHeading mt-2 mb-1">
                        DESCRIPTION
                    </p>
                    <small align="left" className="text-wrap text-break description-scroll" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</small>
                    <div className="d-flex flex-row w-100 align-items-center justify-content-start mt-3">
                        <p className="m-0">Size:</p>
                        <div className="sizeGroup ms-2">
                        <button className="btn btn-dark btn-sm p-1 rounded-3 sizeButton d-flex align-items-center justify-content-center">M</button>
                        </div>
                    </div>
                    <h4 className="promotionPrice bold mt-3">$100.00</h4>
                    <button className="btn btn-dark btn-lg w-40 mt-3">Buy Now</button>
                </div>
        
            </div>

        </div>

        {/* <div className="warrenty-container">
                <img src="images/features.png" />
        </div> */}
        </>
      
    )
}