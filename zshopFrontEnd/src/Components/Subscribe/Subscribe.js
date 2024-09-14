import "./Subscribe.scss";
export function Subscribe(){
    return(
        <>
            <div className="subscribe-container w-100 d-flex flex-row align-items-center justify-content-between mx-auto">
                <div className="subscribe-edge-image-container w-20 h-100 d-none d-md-flex flex-row justify-content-end">
                    <img className="edge-image" src="/images/image10.png"/>
                </div>
                <div className="subscribe-content d-flex flex-column align-items-center justify-content-center">
                    <h3 className="subscribe-heading font-heading">
                        Subscribe to our News Letter
                    </h3>
                    <p className="font-light-gray w-80 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    <input className="subscribe-input w-70 b-shadow mb-4 p-3"/>
                    <button className="btn btn-dark px-3">Subscribe Now</button>
                </div>
                <div className="subscribe-edge-image-container w-20 h-100 d-none d-md-flex flex-row justify-content-start">
                <img className="edge-image" src="/images/image11.png"/>

                </div>


            </div>
        </>
    );
}