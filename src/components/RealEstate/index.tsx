import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Estate1 from "@/assets/images/estate/1.svg";
import Estate2 from "@/assets/images/estate/2.svg";
import Estate3 from "@/assets/images/estate/3.svg";

gsap.registerPlugin(ScrollTrigger);

export const RealEstate: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".animated-block", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
    { scope: container }
  );
  return (
    <div className="container">
      <div className="wrapper">
        <div className="estate" ref={container}>
          <h1 className="animated-block">
            <span className="purple">Mr. Flip</span> выкупает недвижимость
            Москвы
          </h1>
          <h3 className="animated-block">
            Мы вкладываем собственные инвестиции, Вы получаете их до 7 дней с
            момента обращения. Юридически сопровождаем весь документооборот
          </h3>

          <div className="estate__list animated-block">
            <div className="estate__list-item">
              <div className="estate__list-item-img">
                <img src={Estate1} alt="" />
              </div>
              <div className="estate__list-item-time">
                10 секунд
                <div className="estate__list-item-descr">
                  на оценку объекта недвижимости
                </div>
              </div>
            </div>
            <div className="estate__list-item">
              <div className="estate__list-item-img">
                <img src={Estate2} alt="" />
              </div>
              <div className="estate__list-item-time">
                15 минут
                <div className="estate__list-item-descr">
                  на принятие решения о выкупе, выдаем деньги в день обращения
                </div>
              </div>
            </div>
            <div className="estate__list-item">
              <div className="estate__list-item-img">
                <img src={Estate3} alt="" />
              </div>
              <div className="estate__list-item-time">
                1 день
                <div className="estate__list-item-descr">
                  на покупку недвижимости
                </div>
              </div>
            </div>
          </div>

          <div className="estate__map animated-block">
            <div className="estate__map-title">
              Карта выкупленных нами объектов
            </div>
            <div className="estate__map-container">
              <div>Beautiful map</div>
              <div>will be soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
