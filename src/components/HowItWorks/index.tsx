import React, { useRef, useState } from "react";
import Arrow from "../../assets/images/howitworks/arrow.svg";
import Img1 from "../../assets/images/howitworks/1.svg";
import Img2 from "../../assets/images/howitworks/2.svg";
import Img3 from "../../assets/images/howitworks/3.svg";
import Img4 from "../../assets/images/howitworks/4.svg";
import Img5 from "../../assets/images/howitworks/5.svg";

const HowItWorks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ImageContainer = useRef<HTMLImageElement>(null);

  interface IHowItWorksItem {
    text: string;
    img: string;
  }

  const items: IHowItWorksItem[] = [
    {
      text: "Оценим вашу квартиру",
      img: Img1,
    },
    {
      text: "Проверим документы",
      img: Img2,
    },
    {
      text: "Согласуем цену и условия",
      img: Img3,
    },
    {
      text: "Зарегистрируем право собственности",
      img: Img4,
    },
    {
      text: "Переведём деньги",
      img: Img5,
    },
  ];

  const handleClick = (index: number) => {
    setCurrentSlide(index);
    if (ImageContainer) {
      ImageContainer?.current?.classList?.remove("slide-bg");
      ImageContainer?.current?.classList?.add("slide-bg");
      setTimeout(() => {
        ImageContainer?.current?.classList?.remove("slide-bg");
      }, 300);
    }
  };

  return (
    <div className="wrapper">
      <div className="howitworks">
        <div className="howitworks__header">Как это работает?</div>
        <div className="howitworks__container">
          <div className="howitworks__container-left">
            {items.map((item, index) => (
              <div
                key={index}
                className={
                  "howitworks__container-left-item " +
                  (currentSlide === index
                    ? "howitworks__container-left-item--active"
                    : "")
                }
                onClick={() => handleClick(index)}
              >
                <div className="howitworks__container-left-item-num">
                  {index + 1}
                </div>
                <div className="howitworks__container-left-item-text">
                  <span>{item.text}</span>
                </div>
                <div className="howitworks__container-left-item-arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="howitworks__container-right">
            <img src={items[currentSlide].img} alt="" ref={ImageContainer} />
            <div className="howitworks__container-right-text">
              Оставьте заявку для расчета стоимости квартиры
            </div>
            <a
              href="https://t.me/mrflip_agents_bot"
              target="_blank"
              className="btn-scale"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
