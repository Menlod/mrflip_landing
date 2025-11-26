import React from "react";

const Career: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="career">
        <div className="career__header">
          Карьера в <span className="career__purple">Mr. Flip</span>: Создавай
          будущее с нами
        </div>
        <div className="career__text">
          <span className="career__purple">Mr. Flip</span> — это больше чем
          IT-компания.
        </div>
        <div className="career__text">
          <span className="career__purple">Мы</span> — команда, которая меняет
          правила игры на рынке недвижимости, создавая умные продукты на стыке
          искусственного интеллекта и финансов. Наши решения, отмеченные
          международными премиями и поддержанные партнерами уровня Московской
          Биржи, анализируют сотни тысяч данных, чтобы предоставлять клиентам
          лучшие инвестиционные возможности. Мы не просто разрабатываем
          технологии — мы создаем экосистему, которая определяет будущее всей
          отрасли.
        </div>
        <div className="career__btn">
          <a
            target="_blank"
            href="https://wa.me/79996717141?text=%D0%9A%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0"
            className="btn-scale"
          >
            Стать частью команды
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
