import React from "react";

const Team: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="team">
        <div className="team__header">
          Наша команда — эксперты в недвижимости, финансах и IT
        </div>
        <div className="team__container">
          <div className="team__container-list">
            <div className="team__container-list-header">
              Более 10 лет опыта в:
            </div>
            <div className="team__container-list-items">
              <div className="team__container-list-item">
                Аналитике рынка и инвестициях
              </div>
              <div className="team__container-list-item">
                Разработке технологий для автоматизации работы риелторов и
                инвесторов
              </div>
              <div className="team__container-list-item">
                Создании инструментов, которые упрощают процессы принятия
                решений на рынке недвижимости
              </div>
            </div>
          </div>
          <div className="team__container-list">
            <div className="team__container-list-header">В нашем портфолио</div>
            <div className="team__container-list-items">
              <div className="team__container-list-item">
                Работа в ведущих IT-компаниях, включая Яндекс
              </div>
              <div className="team__container-list-item">
                Партнёрские проекты с международными платформами, такими как
                Zillow
              </div>
              <div className="team__container-list-item">
                Участие в инвестиционных компаниях, специализирующихся на
                недвижимости
              </div>
            </div>
          </div>
        </div>
        <div className="team__diff">
          <strong>Что нас отличает</strong> — это сочетание экспертизы в области
          больших данных (Big Data), искусственного интеллекта и финансового
          моделирования. Такой подход позволяет нам создавать эффективные,
          точные и масштабируемые инструменты, которые востребованы
          профессионалами рынка.
        </div>
      </div>
    </div>
  );
};

export default Team;
