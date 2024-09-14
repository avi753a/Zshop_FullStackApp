export function CollectionFilter(){
    return(
        <>
            <div className="collection-filter d-flex flex-column align-items-start justify-content-start">
                <p className="m-0 mb-2">
                    Collections
                </p>
                <div className="collection-container d-flex flex-column align-items-start justify-content-start gap-10">
                    <p className="m-0 mb-1 fs-7">All Products</p>
                    <p className="m-0 mb-1 fs-7">Best Sellers</p>
                    <p className="m-0 mb-1 fs-7">New Arrivals</p>
                    <p className="m-0 mb-1 fs-7">Accessories</p>
                </div>
            </div>
        </>
    );
}