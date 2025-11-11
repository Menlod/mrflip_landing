import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import Bankiru from "../../assets/images/carousel/bankiru.svg";
import Forbes from "../../assets/images/carousel/forbes.svg";
import Gazetaru from "../../assets/images/carousel/gazetaru.svg";
import Izvestia from "../../assets/images/carousel/Izvestia.svg";
import Lentaru from "../../assets/images/carousel/lentaru.svg";
import Kommersant from "../../assets/images/carousel/kommersant.svg";
import Prime from "../../assets/images/carousel/prime.svg";
import Rbc from "../../assets/images/carousel/rbc.svg";
import Rianews from "../../assets/images/carousel/rianews.svg";
import Tass from "../../assets/images/carousel/tass.svg";
import Deita from "../../assets/images/carousel/deitaru.svg";

interface ISlides {
  title: string;
  img: string;
  url: string;
  width: number;
}

const slides: ISlides[] = [
  {
    title: "banki.ru",
    img: Bankiru,
    url: "https://www.banki.ru/news/daytheme/?id=10979719",
    width: 180,
  },
  {
    title: "banki.ru",
    img: Forbes,
    url: "https://www.forbes.ru/biznes/485908-dola-sdelok-s-zil-em-po-doverennosti-v-moskve-vyrosla-do-rekordnoj-za-20-let",
    width: 180,
  },
  {
    title: "banki.ru",
    img: Gazetaru,
    url: "https://www.gazeta.ru/business/news/2023/12/22/21984331.shtml",
    width: 180,
  },
  {
    title: "banki.ru",
    img: Izvestia,
    url: "https://iz.ru/1493889/2023-04-05/ekspert-rasskazal-o-sposobakh-ekonomii-pri-pokupke-nedvizhimosti",
    width: 110,
  },
  {
    title: "banki.ru",
    img: Lentaru,
    url: "https://lenta.ru/news/2023/03/15/dolgo/",
    width: 180,
  },
  {
    title: "banki.ru",
    img: Kommersant,
    url: "https://www.kommersant.ru/doc/5900130",
    width: 180,
  },
  {
    title: "banki.ru",
    img: Prime,
    url: "https://1prime.ru/20230315/840071863.html",
    width: 180,
  },
  {
    title: "banki.ru",
    img: Rbc,
    url: "https://t.rbc.ru/tyumen/04/06/2023/647c01c19a7947bd8172c695",
    width: 160,
  },
  {
    title: "banki.ru",
    img: Rianews,
    url: "https://realty.ria.ru/20230315/srok-1857942582.html",
    width: 180,
  },
  {
    title: "tass.ru",
    img: Tass,
    url: "https://tass.ru/ekonomika/17818903",
    width: 80,
  },
  {
    title: "deita.ru",
    img: Deita,
    url: "https://deita.ru/article/546580",
    width: 180,
  },
];

const Carousel = () => {
  return (
    <div className="slide-container">
      <Splide
        options={{
          rewind: true,
          paddding: "2rem",
          type: "loop",
          autoWidth: true,
          autoHeight: false,
          pagination: false,
          arrows: false,
          speed: 2000,
          start: 0,
          autoplay: true,
          interval: 6000,
          height: 136,
        }}
        aria-label=""
      >
        {slides.map((slide) => (
          <SplideSlide>
            <a className="slide-slide" target="_blank" href={slide.url}>
              <img
                className="slide-img"
                src={slide.img}
                style={{ width: `${slide.width}px` }}
                alt="Image 1"
              />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
