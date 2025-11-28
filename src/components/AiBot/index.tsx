import React from "react";
import Keys from "@/assets/images/aibot/keys.svg";
export const AiBot: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="aibot">
          <div className="aibot__btns">
            <div className="aibot__btns-block">
              <div className="aibot__btns-block-header">
                Реальный выкуп недвижимости вашего клиента
              </div>
              <div className="aibot__btns-block-text">
                собственный капитал, используем свои деньги
              </div>
            </div>
            <a
              className="btn-scale aibot__btn"
              href="https://t.me/mrflip_agents_bot"
              target="_blank"
            >
              <img src={Keys} alt="" />
              <div>Предложить квартиру</div>
            </a>
          </div>
          <div className="aibot__container">
            <div className="aibot__header">
              <span className="career__purple">Mr. Flip</span> — первый ИИ в
              недвижимости
            </div>
            <div className="aibot__text">
              Наша команда разработчиков и инженеров создала уникальную и
              единственную в своей сфере систему, Искусственный Интеллект,
              позволяющий Вам наиболее выгодно распорядиться своими инвестициями
              в недвижимости.
            </div>
            <div className="aibot__text">
              Мы анализируем сотни торговых площадок и тысячи предложений
              ежедневно. Метод экстраполяции позволяет нам сделать для Вас
              лучшее предложение купли и продажи на рынке.
            </div>

            <a
              href="https://t.me/mrflip_agents_bot"
              target="_blank"
              className="aibot__link aibot__purple"
            >
              <span>@MRFLIP_AGENTS_BOT</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
