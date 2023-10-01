import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Breadcrumb from "./Breadcrumb";

const Product = () => {
    return (
        <div className="Product" style={{ 
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            }}>
            <div
                style={{
                    width: "65%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "white",
                }}>
                <Breadcrumb/>
                <div className="pt-2">
                    <ProductImage/>
                </div>
            </div>
            <div className="w-[35%] h-full flex bg-[#f7f8f9]">
                <ProductInfo/>
            </div>
        </div>
    );
}

export default Product;