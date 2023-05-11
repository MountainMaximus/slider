export interface SliderProp {
  autoPlayTime?: number;
  /* Время переключения */
  items: SliderCard[];
  /* массив карточек */
}

export interface SliderCard {
  img: string;
  date: string;
  title: string;
  text: string;
}

export interface SliderContextProp {
  changeSlide: (number: number) => void;
  /* Функция выбора слайда */
  slidesCount: number;
  /* Количество слайдов */
  slideNumber?: number;
  /* Номер активного слайда */
  items: SliderCard[];
  /* массив карточек */
}
