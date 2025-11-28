import React from "react";

type ListItemProps = {
  title: string;
  items: string[];
};

const TeamListSection: React.FC<ListItemProps> = ({ title, items }) => (
  <div className="team__container-list">
    <div className="team__container-list-header">{title}</div>
    <div className="team__container-list-items">
      {items.map((item, index) => (
        <div key={index} className="team__container-list-item">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export const Team: React.FC = () => {
  const expertiseData: ListItemProps = {
    title: "Более 10 лет опыта в:",
    items: [
      "Аналитике рынка и инвестициях",
      "Разработке технологий для автоматизации работы риелторов и инвесторов",
      "Создании инструментов, которые упрощают процессы принятия решений на рынке недвижимости",
    ],
  };

  const portfolioData: ListItemProps = {
    title: "В нашем портфолио:",
    items: [
      "Работа в ведущих IT-компаниях, включая Яндекс",
      "Партнёрские проекты с международными платформами, такими как Zillow",
      "Участие в инвестиционных компаниях, специализирующихся на недвижимости",
    ],
  };

  return (
    <div className="container">
      <div className="wrapper">
        <section className="team">
          <header className="team__header">
            Наша команда — эксперты в недвижимости, финансах и IT
          </header>
          <div className="team__container">
            <TeamListSection {...expertiseData} />
            <TeamListSection {...portfolioData} />
          </div>
          <p className="team__diff">
            <strong>Что нас отличает</strong> — это сочетание экспертизы в
            области больших данных (Big Data), искусственного интеллекта и
            финансового моделирования. Такой подход позволяет нам создавать
            эффективные, точные и масштабируемые инструменты, которые
            востребованы профессионалами рынка.
          </p>
        </section>
      </div>
    </div>
  );
};
