import './Hero.scss';
export function Hero() {
    return (
        <>
            <div className="hero-container w-100 d-flex flex-row justify-content-between mt-4">
                <div className="left-container w-30 image-background rounded-2 d-none d-md-flex justify-content-end align-items-end">
                    <img src='/images/image2.png' className='w-90 h-75 ih-responsive mx-auto'></img>
                </div>
                <div className="center-container w-35 w-sm-100 d-flex flex-column rounded-2 justify-content-center align-items-center">
                    <div className='image-top vertical-cover h-25'>
                        <img className='w-100 h-100 vertical-cover-image' src='/images/image3.png'></img>
                    </div>
                    <div className='image-text my-3 mb-5'>
                        <h1 className='fs-heading fw-700 m-0'>ULTIMATE</h1>
                        <h1 className='font-outline fs-highlight m-0'>SALE</h1>
                        <p>NEW COLLECTION</p>
                        <button className='btn btn-dark b-shadow btn-lg col-md-7 col-9'>SHOP NOW</button>
                    </div>
                    <div className='image-bottom vertical-cover h-25'>
                        <img className='w-100 h-100 ' src='/images/image1.png'></img>

                    </div>
                   
                </div>
                <div className="right-container w-30 image-background rounded-2 d-none d-md-flex justify-content-end align-items-end">
                    <img src='/images/image4.png' className='w-90 vertical-cover-image  h-75 mx-auto'></img>
                </div>
            </div>
            <img className='w-100 mt-4' src='/images/logos.png'></img>

        </>
    )
}