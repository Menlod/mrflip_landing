import React from "react";
import Logo from "../../assets/images/header/logo-main.svg";
import Arrow from "../../assets/images/awards/arrow.svg";

const Awards: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="awards">
        <div className="awards__top">
          <img src={Logo} alt="" />
          <div className="awards__top-text">
            — инновационная IT-компания, трансформирующая рынок недвижимости с
            помощью искусственного интеллекта
          </div>
        </div>
        <div className="awards__list">
          <div className="awards__list-item">
            <div className="awards__list-item-header">
              <img src={Arrow} alt="" />
              Более 7 патентов
            </div>
            <div className="awards__list-item-content awards__list-item-content--doc">
              <div className="awards__list-item-content-item">
                Модель оценки рыночной стоимости квартир
              </div>
              <div className="awards__list-item-content-item">
                Инвестиционный портфель объектов недвижимости
              </div>
            </div>
          </div>

          <div className="awards__list-item">
            <div className="awards__list-item-header">
              <img src={Arrow} alt="" />
              Аккредитации
            </div>
            <div className="awards__list-item-content awards__list-item-content--cup">
              <div className="awards__list-item-content-item">
                Резидент Сколково
              </div>
              <div className="awards__list-item-content-item">Статус МТК</div>
            </div>
          </div>

          <div className="awards__list-item">
            <div className="awards__list-item-header">
              <img src={Arrow} alt="" />
              Награды в международных премиях
            </div>
            <div className="awards__list-item-content awards__list-item-content--cup">
              <div className="awards__list-item-content-item">
                Лучшее применение ИИ в недвижимости
              </div>
              <div className="awards__list-item-content-item">
                За вклад в цифровизацию рынка
              </div>
            </div>
          </div>

          <div className="awards__list-item">
            <div className="awards__list-item-header">
              <img src={Arrow} alt="" />
              №1 кто сделал Цифровой Финансовый Актив
            </div>
            <div className="awards__list-item-content awards__list-item-content--cup">
              <div className="awards__list-item-content-item">
                На рынке вторичной недвижимости
              </div>
              <div className="awards__list-item-content-item">
                На рынке вторичной залоговой недвижимости
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
