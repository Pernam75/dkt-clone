import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import { useState } from "react";
const CarouselProduct = ({ products }) => {
  let [current, setCurrent] = useState(0);

  let previousImage = () => {
    setCurrent(current === 0 ? products.length - 1 : current - 1);
  }

  let nextImage = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex h-[80vh] transition easinout duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {
          products.map((p, i) => {
            return <img 
            style={
              {
                width: "auto",
                maxWidth: "100%",
                objectFit: "cover"
              }
            }
            src={p} alt={`product-${i}`}/>
          })}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4">
        <button 
          className="h-12 w-12 justify-center items-center flex"
          onClick={previousImage}
          style={{
            border: "0.2rem solid #d9dde1",
            borderRadius: "10%",
            backgroundColor: "rgba(255, 255, 255)",
          }}>
          <IconContext.Provider value={{ color: "#026a9e", size: "2rem" }}>
            <IoIosArrowBack/>
          </IconContext.Provider>
        </button>
        <button 
          className="h-12 w-12 justify-center items-center flex"
          onClick={nextImage}
          style={{
            border: "0.2rem solid #d9dde1",
            borderRadius: "10%",
            // background opacity is 0.5
            backgroundColor: "rgba(255, 255, 255)",
          }}>
          <IconContext.Provider value={{ color: "#026a9e", size: "2rem" }}>
            <IoIosArrowForward/>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default CarouselProduct;
