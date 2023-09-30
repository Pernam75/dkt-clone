import React from 'react';
import CarouselProduct from './CarouselProduct';

const products = [ "https://contents.mediadecathlon.com/p2403888/k$32ba2bdff778a45210fadb4d92619403/sq/t-shirt-fitness-femme-500-essentials-noir.jpg?format=auto&f=323x323",
"https://contents.mediadecathlon.com/p2403887/k$1484d4ca450ab54af26b00b5a7469cea/sq/t-shirt-fitness-femme-500-essentials-noir.jpg?format=auto&f=323x323",
"https://contents.mediadecathlon.com/p2403886/k$0408896887e676df63562c4dcdad56c3/sq/t-shirt-fitness-femme-500-essentials-noir.jpg?format=auto&f=323x323",
"https://contents.mediadecathlon.com/p2403885/k$412e630d5ebc2088ad7ec54d6f90af16/sq/t-shirt-fitness-femme-500-essentials-noir.jpg?format=auto&f=323x323"
];

const ProductImage = () => {
    return (
        <div className="w-[100vw] m-auto pr-16">
            <CarouselProduct products={products}/>
        </div>
    );
}

export default ProductImage;