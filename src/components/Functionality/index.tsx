import React, { useRef, useState } from "react";
import ItemImg1 from "../../assets/images/functionality/1.svg";
import ItemImg2 from "../../assets/images/functionality/2.svg";
import ItemImg3 from "../../assets/images/functionality/3.svg";
import ItemImg4 from "../../assets/images/functionality/4.svg";
import ItemImg5 from "../../assets/images/functionality/5.svg";
import ItemImg6 from "../../assets/images/functionality/6.svg";

import ItemImg0_1 from "../../assets/images/functionality/0_1.svg";
import ItemImg1_1 from "../../assets/images/functionality/1_1.svg";
import ItemImg2_1 from "../../assets/images/functionality/2_1.svg";
import ItemImg3_1 from "../../assets/images/functionality/3_1.svg";
import ItemImg4_1 from "../../assets/images/functionality/4_1.svg";
import ItemImg5_1 from "../../assets/images/functionality/5_1.svg";
import ItemImg6_1 from "../../assets/images/functionality/6_1.svg";

const Functionality: React.FC = () => {
  interface IPossibilities {
    img: string;
    title: string;
    text: string;
    slide: string;
  }

  const possibilities: IPossibilities[] = [
    {
      img: ItemImg1,
      title: "Предложение квартиры",
      text: "Продайте квартиру за несколько часов с помощью бота",
      slide: ItemImg1_1,
    },
    {
      img: ItemImg2,
      title: "Партнерская программа",
      text: "Приглашайте друзей и получайте вознаграждение",
      slide: ItemImg2_1,
    },
    {
      img: ItemImg3,
      title: "Индексы цен вторички",
      text: "Возможность отследить последние изменения в индексах цен вторички",
      slide: ItemImg3_1,
    },
    {
      img: ItemImg4,
      title: "Квартиры под флиппинг",
      text: "Поможем выбрать лучший объект для флиппинга и вложиться инвестициями",
      slide: ItemImg4_1,
    },
    {
      img: ItemImg5,
      title: "Инвестиционные предложения",
      text: "Предлагаем инвестиционные предложения без рисков",
      slide: ItemImg5_1,
    },
    {
      img: ItemImg6,
      title: "Краудфандинг",
      text: "Выбор инвест-предложений для входа со своими средствами",
      slide: ItemImg6_1,
    },
  ];

  const [currentItem, setCurrentItem] = useState(-1);
  const ImageContainer = useRef<HTMLDivElement>(null);
  const handleClick = (
    index: number
    //event: React.MouseEvent<HTMLDivElement>
  ) => {
    setCurrentItem((prev) => (prev === index ? -1 : index));
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
      <div className="functionality">
        <div className="functionality__header">
          Функциональные возможности бота
        </div>
        <div className="functionality__container">
          <div className="functionality__container-left">
            {possibilities.map((item, index) => (
              <div
                className={
                  "functionality__container-item " +
                  (currentItem === index
                    ? "functionality__container-item--active"
                    : "")
                }
                key={index}
                onClick={() => handleClick(index)}
              >
                <div className="functionality__container-item-header">
                  <img src={item.img} alt="" />
                  <span>{item.title}</span>
                </div>
                <div className="functionality__container-item-text">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
          <div
            className="functionality__container-right"
            ref={ImageContainer}
            style={{
              backgroundImage:
                currentItem === -1
                  ? `url("${ItemImg0_1}")`
                  : `url("${possibilities[currentItem].slide}")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
