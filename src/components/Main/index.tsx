import React, { useRef } from "react";
import Clock from "../Clock";
import { parseCianFlatUrl } from "@/utils";
import Ico1 from "@/assets/images/phone/ico1.svg";
import Ico2 from "@/assets/images/phone/ico2.svg";
import Ico3 from "@/assets/images/phone/ico3.svg";
import Ico4 from "@/assets/images/phone/ico4.svg";
import Avatar from "@/assets/images/phone/avatar.svg";
import Info from "@/assets/images/phone/info.svg";

export const Main: React.FC = () => {
  const cianLink = useRef<HTMLInputElement>(null);
  const CalculateSummaryHandler = () => {
    const cianId =
      (cianLink.current && parseCianFlatUrl(cianLink.current.value)) || null;
    // TODO: fetch and show modal result
    console.log("CianID: ", cianId);
    return cianId;
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="main">
          <div className="main__left">
            <h1 className="main__left-text">
              Принимаем <span className="bordered">верные решения</span> в
              инвестициях
              <br />с помощью AI
            </h1>
            <h2 className="main__left-undertext">
              Покупка и продажа недвижимости в Москве и МО с помощью
              искусственного интеллекта
            </h2>

            <div className="main__left-stats">
              <div className="main__left-stats-item">
                <span className="main__left-stats-item-title">
                  сумма рассматриваемых объектов
                </span>
                <span className="main__left-stats-item-value">до 25 млн</span>
              </div>
              <div className="main__left-stats-item">
                <span className="main__left-stats-item-title">
                  всего выплачено денег партнерам
                </span>
                <span className="main__left-stats-item-value">&gt;76 млн</span>
              </div>
              <div className="main__left-stats-item">
                <span className="main__left-stats-item-title">
                  кол-во рассматриваемых объектов ежедневно
                </span>{" "}
                <span className="main__left-stats-item-value">&gt;10 000</span>
              </div>
            </div>
          </div>
          <div className="main__right">
            <div className="phone">
              <div className="phone__header">
                <div className="phone__header-left">
                  <Clock />
                </div>
                <div className="phone__header-right">
                  <img src={Ico1} alt="" />
                  <img src={Ico2} alt="" />
                  <img src={Ico3} alt="" />
                </div>
              </div>

              <div className="phone__tg">
                <div className="phone__tg-left">
                  <img src={Avatar} alt="" />
                </div>
                <div className="phone__tg-center">
                  <div className="phone__tg-center-uptext">
                    ФЛИП выкуп квартир
                  </div>
                  <div className="phone__tg-center-subtext">бот</div>
                </div>
                <div className="phone__tg-right">
                  <img src={Ico4} alt="" />
                </div>
              </div>
              <div className="phone__form">
                <div className="form-price-link">
                  <input
                    type="text"
                    id="cian_link"
                    ref={cianLink}
                    placeholder="Введите сюда ссылку"
                  />
                </div>
                <div>
                  <button onClick={CalculateSummaryHandler}>
                    Рассчитать стоимость
                  </button>
                </div>
                <div className="phone__form-info">
                  <img src={Info} alt="" />
                  <span className="phone__form-info-text">
                    В данный момент оценка по ссылке может быть рассчитана
                    только для объявления с ЦИАН
                  </span>
                </div>
              </div>
              <div className="phone__chart">
                <div>Beautiful chart</div>
                <div>will be soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
