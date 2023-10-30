import React from 'react';
import CarouselProduct from './CarouselProduct';

const products = {
  femmes: [
    "https://drive.google.com/uc?export=view&id=1ZWRkN2cUPIMfIqU5lZtbVg8IDNQm-gjW",
    "https://drive.google.com/uc?export=view&id=1_dOL-psosuQeVTdZsjFakeW5BD3nglgN",
    "https://drive.google.com/uc?export=view&id=1xikDogBbLFy3ibw43y-rzF7FdPcv_EMG",
    "https://drive.google.com/uc?export=view&id=1_oprWliOr0eGb9KRaYqtrDkNIHnjiTHO",
  ],
  hommes: [
    
    "https://lh3.googleusercontent.com/pw/ADCreHcpWk4Bw5OViOE7n9MYs1I4gT8pCpsiAIE2kUSFi_9amFKrD8hapH0RlatW1X0P4UIxyUVJduikPuYDyvIZUzyn7ZBHnWP3oFpNoEN7I4dJXb-Tpw=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHev5p-snRTiBmBD9uJFEPFiniZnMgRWgHGJCLjWu60Nj4xfGIdt6D8xEO8JmLlvzOtUxg8m672myy0608s2uU3BGg-UK0c-ZMdaKxyiOKho8-gIPA=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHfuzbXHOPC3NBaYGUqX4D57JrIVvuHzK4SUcBGjdZbqzA6j1MJxJvxqnGhPFY_VlWjLIduCyGXrVPovVTKGoKkuvC-X3Rg9XsP886XC21Hn04CfmA=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHcLimLQNBwDu-rjYgX2d9XOoDdvLmmIx3l_xwq8rHN-i0fvHKLiVAjp88wPcBHkLb5P6EbAdo35AL1LgKL_AEyyHni_5o0Af0oRpRZBxciJZPK4OQ=w2400",
    "https://lh3.googleusercontent.com/pw/ADCreHcGLHdXOAfZwveXD65zLmvmlE4Qwxp34q0ZniJWAqWSj4xGS187-lTxwHdySQFh_f1H2H4KLrj-Qr7jaDGlnLpAXSJeNfeObsi6Zr3HfaQeZWf93g=w2400",
  ],
};

const ProductImage = ({ gender }) => {
  const selectedProducts = gender === 'femmes' ? products.femmes : products.hommes;

  return (
    <div className="w-[100vw] pr-16">
      <CarouselProduct products={selectedProducts} />
    </div>
  );
};

export default ProductImage;
