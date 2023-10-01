import React from 'react';
import CarouselProduct from './CarouselProduct';



const products = [
    "https://drive.google.com/uc?export=view&id=1ZWRkN2cUPIMfIqU5lZtbVg8IDNQm-gjW",
    "https://drive.google.com/uc?export=view&id=1_dOL-psosuQeVTdZsjFakeW5BD3nglgN",
    "https://drive.google.com/uc?export=view&id=1xikDogBbLFy3ibw43y-rzF7FdPcv_EMG",
    "https://drive.google.com/uc?export=view&id=1_oprWliOr0eGb9KRaYqtrDkNIHnjiTHO",
];


const ProductImage = () => {
    return (
        <div className="w-[100vw] pr-16 justify-start">
            <CarouselProduct products={products}/>
        </div>
    );
}

export default ProductImage;