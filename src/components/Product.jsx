import React from "react";
import ProductImage from "./ProductImage";

const Product = () => {
    return (
        <div className="Product" style={{ 
            width: "100vw",
            padding: "1rem"}}>
            <div
                style={{
                    width: "65%",
                    height: "100%",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "grey",
                }}>
                <ProductImage/>
            </div>

        </div>
    );
}

export default Product;