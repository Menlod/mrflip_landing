import React from "react";

export const Offer: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="offer">
          <div className="offer__header">
            <span>Mr. Flip</span> — не агентство недвижимости
          </div>
          <div className="offer__container">
            <div className="offer__container-left">
              <div className="offer__container-left-img"></div>
              <div className="offer__container-text">
                Мы выкупаем квартиры на собственные средства, без занижения
                стоимости. Выход на сделку занимает не более нескольких дней
                после предоставления необходимых документов. Вы можете получить
                оффер на вашу квартиру через несколько часов, с помощью телеграм
                бота.
              </div>
            </div>
            <div className="offer__container-right">
              <div className="offer__container-header">
                Приглашайте друзей и получайте до 20% комиссии с каждой их
                сделки
              </div>
              <div className="offer__container-text">
                Если у вас нет квартиры на продажу - приглашайте друзей и
                получайте до 20% комиссии с каждой их сделки, и с каждой сделки
                приведённых ими пользователей, вплоть до 8 уровня реферальной
                программы.
              </div>
              <div className="offer__container-btn">
                <a
                  href="https://t.me/mrflip_agents_bot"
                  target="_blank"
                  className="btn-scale"
                  rel="noopener noreferrer"
                >
                  Получить оффер
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
