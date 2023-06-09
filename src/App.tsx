import Slider from "./components/Slider";

const items = [
  {
    img: "Photo.png",
    date: "10.11.2020 г.",
    title: "Ким и Валерия Брейтбурги написали книгу про искусство",
    text: "Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…",
  },
  {
    img: "Photo.png",
    date: "10.11.2020 г.",
    title:
      "Юрий Колокольников пытается спасти Землю в клипе «Космические силы»",
    text: "Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.",
  },
  {
    img: "Photo.png",
    date: "10.11.2020 г.",
    title: "BTS получили четыре награды MTV EMA",
    text: "BTS получили четыре награды MTV EMA  27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.",
  },
  {
    img: "Photo.png",
    date: "10.11.2020 г.",
    title: "Открытие сезона «Ла Скала» отменено",
    text: "Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».",
  },
  {
    img: "Photo.png",
    date: "10.11.2020 г.",
    title: "Ким и Валерия Брейтбурги написали книгу про искусство",
    text: "Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».",
  },
];
const App = () => {
  return (
    <div className="container">
      <Slider items={items} />
    </div>
  );
};

export default App;
