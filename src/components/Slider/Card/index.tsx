import React from "react";
import { SliderCard } from "../type";

const Card: React.FC<SliderCard & { maximizedTitle: string }> = ({
  img,
  date,
  title,
  text,
  maximizedTitle,
}) => {
  return (
    <div className="slider__card">
      <div className="slider__card__indentation">
        <img className="slider__card__img" src={img} alt="SliderPhoto" />
        <div className="slider__card__date">{date}</div>
        <div className="slider__card__title">
          {maximizedTitle}
          <div>{title}</div>
        </div>
        <div className="slider__card__text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
