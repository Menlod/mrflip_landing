import React from "react";
import Man from "@/assets/images/mission/man.png";

export const Mission: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="mission">
          <div className="mission__top">
            <div className="mission__top-item">
              Наша миссия: Чтобы продать недвижимость было быстро, просто,
              спокойно и не было испытанием.
            </div>
            <div className="mission__top-item mission__top-item--img">
              <img src={Man} alt="" />
            </div>
          </div>
          <div className="mission__goallist">
            <div className="mission__goallist-item">
              <div className="mission__goallist-item-num">
                <span>1</span>
              </div>
              <div className="mission__goallist-item-text">
                <div className="mission__goallist-item-text-title">
                  Скорость
                </div>
                <div className="mission__goallist-item-text-descr">
                  Сделки с недвижимостью за считанные дни — без ожиданий,
                  звонков и волокиты.
                </div>
              </div>
            </div>
            <div className="mission__goallist-item">
              <div className="mission__goallist-item-num">
                <span>2</span>
              </div>
              <div className="mission__goallist-item-text">
                <div className="mission__goallist-item-text-title">
                  Простота
                </div>
                <div className="mission__goallist-item-text-descr">
                  Оценка, документы и получение денег — в одном понятном
                  цифровом процессе.
                </div>
              </div>
            </div>
            <div className="mission__goallist-item">
              <div className="mission__goallist-item-num">
                <span>3</span>
              </div>
              <div className="mission__goallist-item-text">
                <div className="mission__goallist-item-text-title">Доверие</div>
                <div className="mission__goallist-item-text-descr">
                  Каждое решение подкреплено данными и собственным капиталом
                  компании.
                </div>
              </div>
            </div>
          </div>
          <div className="mission__footer">
            <div>
              <span className="mission__footer-brand">Mr. Flip</span> — быстро,
              просто, по-человечески.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
