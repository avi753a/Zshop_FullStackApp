  import "./TestimonialCard.scss";
  export function TestimonialCard(){
    return(
        <>
            <div className="testimonial-card w-100 d-flex flex-row align-items-center justify-content-between p-3 vertical-align">
                <div className="w-40 square card-image me-4 ">
                    <img src="/images/image8.png"  className="w-100 h-100"/>
                </div>
                <div className="card-data d-flex flex-column align-items-start justify-content-start">
                    <p className="review-text fs-7">"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"</p>
                    <div className="review-stars d-flex flex-row align-items-center justify-content-start mb-3">
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                    </div>
                    {/* <hr className="w-80 bold separation-line"></hr> */}
                    <h6 className="font-heading m-0">James.K</h6>
                    <p className="fs-7">Traveller</p>
                </div>
            </div>
        </>
    )
  }