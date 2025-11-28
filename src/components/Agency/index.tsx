import React from "react";
import styles from "./style.module.scss";
export const Agency: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className={styles.agency}>
          <div className={styles.agencyHeader}>Для агенств недвижимости</div>
          <div className={styles.agencyHeader}>
            Оффер на покупку всего пула квартир, находящихся у вас в продаже
          </div>
          <div className={styles.agencyText}>
            Вы можете направить пул квартир целиком, и получить предложение о
            покупке уже сегодня
          </div>
          <div className={styles.agencyBtn}>
            <button className="btn-scale">Получить предложение</button>
          </div>
          <div className={`${styles.agencyHeader} ${styles.agencyHeaderBig}`}>
            <div>Наша концепция основана</div>
            <span>на разумном управлении</span>
            <div>ресурсами</div>
          </div>
          <div className={styles.agencyText}>
            уже изученная и проверенная база, профессионализм и качество
            сопровождения сделок, оперативность и чистота юридических и
            фактических аспектов покупки/продажи недвижимости.
          </div>
        </div>
      </div>
    </div>
  );
};
