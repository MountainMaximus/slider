import React from "react";
import Arrows from "./Arrows";
import Card from "./Card";
import ProgressLine from "./ProgressLine";
import { SliderProp } from "./type";

const Slider: React.FC<SliderProp> = ({ items, autoPlayTime }) => {
  const [slide, setSlide] = React.useState(0);
  const [maximizedTitle, setMaximizedTitle] = React.useState("");
  const [innerWidthCoeff, setInnerWidthCoeff] = React.useState([0, 0]);

  const [touchPosition, setTouchPosition] = React.useState<number | null>(null);
  /*Поиск максимального заголовка */
  React.useEffect(() => {
    setMaximizedTitle(
      items.reduce(
        (acc, val) => (val.title.length > acc.length ? val.title : acc),
        ""
      )
    );
  }, [items]);
  /*Подсчет коэффициента скролла */
  React.useEffect(() => {
    const handleResizeWindow = () => {
      if (window.innerWidth > 991) {
        setInnerWidthCoeff([25, 10]);
      } else if (window.innerWidth > 768) {
        setInnerWidthCoeff([33.3, 7]);
      } else if (window.innerWidth > 565) {
        setInnerWidthCoeff([50, 5]);
      } else setInnerWidthCoeff([97, 0]);
    };
    window.addEventListener("resize", handleResizeWindow);
    handleResizeWindow();
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  /*Выбор слайда */
  const changeSlide = React.useCallback(
    (direction: number = 1) => {
      if (slide + direction < 0) setSlide(items.length - 1);
      else setSlide((direction + slide) % items.length);
    },
    [items.length, slide]
  );
  /*Автоплей */
  React.useEffect(() => {
    if (!autoPlayTime || items.length < 2) return;
    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);
    return () => {
      clearInterval(interval);
    };
  }, [items.length, autoPlayTime, changeSlide]);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchPosition(event.touches[0].clientX);
  };
  const handleTouchMove = (event: React.TouchEvent) => {
    const currentTouchPosition = event.touches[0].clientX;
    if (touchPosition === null) return;
    const lenghtTouch = touchPosition - currentTouchPosition;
    if (lenghtTouch > 20) {
      changeSlide(1);
      setTouchPosition(null);
    }

    if (lenghtTouch < -20) {
      changeSlide(-1);
      setTouchPosition(null);
    }
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <h1 className="slider__title">Актуальное</h1>
      <div
        className="slider__card__wrapper"
        style={{
          transform: `translateX(calc(${-slide * innerWidthCoeff[0]}% - ${
            innerWidthCoeff[1] * slide
          }px))`,
        }}
      >
        {items &&
          items.map((obj, index) => (
            <Card key={index} {...obj} maximizedTitle={maximizedTitle} />
          ))}
      </div>
      <div className="slider__control__wrapper">
        <Arrows changeSlide={changeSlide} />
        <ProgressLine slidesCount={items.length} slideNumber={slide} />
      </div>
    </div>
  );
};

export default Slider;
/*
    <div className={styles.slider}>
      <div className={`${styles.slide} ${styles.prev}`} key={prevImg}>
        <img className="{styles.pfone}" src={items[prevImg]} alt="Baner" />
      </div>

      <div className={`${styles.slide} ${styles.activeSlide}`} key={activeImg}>
        <img className="{styles.pfone}" src={items[activeImg]} alt="Baner" />
      </div>

      <div className={`${styles.wrapper} ${styles.next}`} key={nextImg}>
        <img className="{styles.pfone}" src={items[nextImg]} alt="Baner" />
      </div>
    </div>*/
