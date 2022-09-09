import React from "react";
import './styles/sliderImg.css' 

const SliderImg = ({ productInfo }) => {
  return (
    <div className="slider">
      <button className="slider__prev">&#60;</button>
      <div className="slide__interior">
        {productInfo?.productImgs.map((img, index) => {
          <div className="slider__container-img" key={img}>
            <img
              className="slider__img"
              src={img}
              alt={`imagen de ${productInfo.title} ${index}`}
            />
          </div>;
        })}
      </div>
      <button className="slider__next">&#62;</button>
    </div>
  );
};

export default SliderImg;
