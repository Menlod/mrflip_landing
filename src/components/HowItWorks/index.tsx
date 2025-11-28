import React, { useState, useCallback, useRef } from "react";
import clsx from "clsx";
import Arrow from "@/assets/images/howitworks/arrow.svg";
import Img1 from "@/assets/images/howitworks/1.svg";
import Img2 from "@/assets/images/howitworks/2.svg";
import Img3 from "@/assets/images/howitworks/3.svg";
import Img4 from "@/assets/images/howitworks/4.svg";
import Img5 from "@/assets/images/howitworks/5.svg";

interface HowItWorksItem {
  text: string;
  img: string;
}

const ITEMS: HowItWorksItem[] = [
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

export const HowItWorks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);

    if (imageRef.current) {
      imageRef.current.classList.remove("slide-bg");
      void imageRef.current.offsetWidth;
      imageRef.current.classList.add("slide-bg");

      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.remove("slide-bg");
        }
      }, 300);
    }
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="howitworks">
          <h2 className="howitworks__header">Как это работает?</h2>
          <div className="howitworks__container">
            <div className="howitworks__container-left">
              {ITEMS.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "howitworks__container-left-item",
                    currentSlide === index &&
                      "howitworks__container-left-item--active"
                  )}
                  onClick={() => handleSlideChange(index)}
                  aria-pressed={currentSlide === index}
                >
                  <div className="howitworks__container-left-item-num">
                    {index + 1}
                  </div>
                  <div className="howitworks__container-left-item-text">
                    <span>{item.text}</span>
                  </div>
                  <div className="howitworks__container-left-item-arrow">
                    <img src={Arrow} alt="" role="presentation" />
                  </div>
                </div>
              ))}
            </div>
            <div className="howitworks__container-right">
              <div className="howitworks__image-container">
                <img
                  src={ITEMS[currentSlide].img}
                  alt={`Шаг ${currentSlide + 1}: ${ITEMS[currentSlide].text}`}
                  className={clsx(
                    "howitworks__image",
                    imageRef.current?.classList.contains("slide-bg") &&
                      "slide-bg"
                  )}
                  ref={imageRef}
                />
              </div>
              <p className="howitworks__container-right-text">
                Оставьте заявку для расчета стоимости квартиры
              </p>
              <a
                href="https://t.me/mrflip_agents_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-scale"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
