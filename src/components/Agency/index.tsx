import React from "react";

const Agency: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="agency">
        <div className="agency__header">Для агенств недвижимости</div>
        <div className="agency__header">
          Оффер на покупку всего пула квартир, находящихся у вас в продаже
        </div>
        <div className="agency__text">
          Вы можете направить пул квартир целиком, и получить предложение о
          покупке уже сегодня
        </div>
        <div className="agency__btn">
          <button className="btn-scale">Получить предложение</button>
        </div>
        <div className="agency__header agency__header--big">
          <div>Наша концепция основана</div>
          <span>на разумном управлении</span>
          <div>ресурсами</div>
        </div>
        <div className="agency__text">
          уже изученная и проверенная база, профессионализм и качество
          сопровождения сделок, оперативность и чистота юридических и
          фактических аспектов покупки/продажи недвижимости.
        </div>
      </div>
    </div>
  );
};

export default Agency;
