import React from "react";

const Arrows: React.FC<{ changeSlide: (num: number) => void }> = ({
  changeSlide,
}) => {
  return (
    <div className="slider__arrows">
      <button
        className="slider__arrows__btn"
        onClick={() => {
          if (changeSlide) changeSlide(-1);
        }}
      >
        <img src="Vector.svg" alt="SliderArrow" />
      </button>
      <button
        className="slider__arrows__btn"
        onClick={() => {
          if (changeSlide) changeSlide(1);
        }}
      >
        <img
          className="slider__arrows__img-next"
          src="Vector.svg"
          alt="SliderArrow"
        />
      </button>
    </div>
  );
};

export default Arrows;
