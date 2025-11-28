import React from "react";

export const Career: React.FC = () => {
  const phoneNumber = "79996717141";
  const message = "Карьера";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container">
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
              href={whatsappUrl}
              rel="noopener noreferrer"
              aria-label="Связаться через WhatsApp для вопросов о карьере"
              className="btn-scale"
            >
              Стать частью команды
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
