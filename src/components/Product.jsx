import React, { useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Breadcrumb from "./Breadcrumb";
import { VtmnButton } from "@vtmn/react";

const Product = () => {
    const [gender, setGender] = useState("femmes");
    const handleGenderChange = () => {
        setGender(gender === "femmes" ? "hommes" : "femmes");
    };
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
                <div className="flex flex-row items-center justify-between w-[100%] pt-2 px-8">
                    <VtmnButton
                        size="small"
                        variant="secondary"
                        onClick={handleGenderChange}>
                        Changer le genre
                    </VtmnButton>
                </div>
                <div className="pt-2">
                    <ProductImage gender={gender}/>
                </div>
            </div>
            <div className="w-[35%] min-h-[100vh] flex bg-[#f7f8f9]">
                <ProductInfo gender={gender}/>
            </div>
        </div>
    );
}

export default Product;
