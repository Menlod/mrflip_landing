import React from "react";
import Logo from "@/assets/images/header/logo-main.svg";
import Arrow from "@/assets/images/awards/arrow.svg";

interface AwardItem {
  id: number;
  header: string;
  items: string[];
  contentType: "doc" | "cup";
}

const AWARDS_DATA: AwardItem[] = [
  {
    id: 1,
    header: "Более 7 патентов",
    contentType: "doc",
    items: [
      "Модель оценки рыночной стоимости квартир",
      "Инвестиционный портфель объектов недвижимости",
    ],
  },
  {
    id: 2,
    header: "Аккредитации",
    contentType: "cup",
    items: ["Резидент Сколково", "Статус МТК"],
  },
  {
    id: 3,
    header: "Награды в международных премиях",
    contentType: "cup",
    items: [
      "Лучшее применение ИИ в недвижимости",
      "За вклад в цифровизацию рынка",
    ],
  },
  {
    id: 4,
    header: "№1 кто сделал Цифровой Финансовый Актив",
    contentType: "cup",
    items: [
      "На рынке вторичной недвижимости",
      "На рынке вторичной залоговой недвижимости",
    ],
  },
];

export const Awards: React.FC = React.memo(() => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="awards">
          <div className="awards__top">
            <img src={Logo} alt="Логотип Mr. Flip" />
            <div className="awards__top-text">
              — инновационная IT-компания, трансформирующая рынок недвижимости с
              помощью искусственного интеллекта
            </div>
          </div>
          <div className="awards__list">
            {AWARDS_DATA.map((award) => (
              <div className="awards__list-item" key={award.id}>
                <div className="awards__list-item-header">
                  <img src={Arrow} alt="" role="presentation" />
                  {award.header}
                </div>
                <div
                  className={`awards__list-item-content awards__list-item-content--${award.contentType}`}
                >
                  {award.items.map((item, index) => (
                    <div className="awards__list-item-content-item" key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
