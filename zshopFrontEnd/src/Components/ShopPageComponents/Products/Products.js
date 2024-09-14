import { useEffect, useState } from "react";
import { BrandFilter } from "../BrandFilter/BrandFilter";
import { CollectionFilter } from "../CollectionFilter/CollectionFilter";
import ColorFilter from "../ColorFilter/ColorFilter";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import ProductItem from "../ProductItem/ProductItem";
import SizeFilter from "../SizeFilter/SizeFilter";
import { TagFilter } from "../TagFilter/TagFilter";
import "./Products.scss";
import { Pagination } from "@mui/material";
export function Products() {
    const itemsPerPage = 9; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);

    // Dummy initial product data
    const initialProducts = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        description: `Description for Product ${index + 1}`,
    }));

    // Load initial products on first render
    useEffect(() => {
        setProducts(initialProducts);
    }, []);

    // Function to load the next set of products
    const loadNextProducts = (pageNumber) => {
        const newProducts = Array.from({ length: 9 }, (_, index) => ({
            id: (pageNumber - 1) * 9 + index + 1,
            name: `Product ${(pageNumber - 1) * 9 + index + 1}`,
            description: `Description for Product ${(pageNumber - 1) * 9 + index + 1}`,
        }));
        setProducts(newProducts);
    };

    // Handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        loadNextProducts(value); // Load the products for the selected page
    };
    return (
        <>
            <div className="shop-container  w-100">
                <h1 className="font-heading">Fashion</h1>
                <div className="products-container d-flex flex-row align-items-start justify-content-between">
                    <div className="filter-container w-20 d-flex flex-column align-items-start justify-content-start">
                        <h2 className="font-heading mb-3">Filters</h2>
                        <SizeFilter />
                        <ColorFilter />
                        <PriceFilter />
                        <BrandFilter />
                        <CollectionFilter />
                        <TagFilter />
                    </div>
                    <div className="shop-products w-75 d-flex flex-column flex-wrap justify-content-start align-items-center">
                        <div className="product-list-container w-100 flex-wrap justify-content-beyween align-items-center d-flex flex-row">
                            {products.map((product) => (
                                <ProductItem key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination
                            count={10}
                            page={currentPage}
                            onChange={handlePageChange}
                            variant="outlined"
                            shape="rounded"
                            className="mt-3"
                            color="dark"
                        />                    </div>



                </div>
            </div>

        </>
    );
}