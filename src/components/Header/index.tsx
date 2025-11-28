import React from "react";
import Logo from "@/assets/images/header/logo-main.svg";
import LogoMoex1 from "@/assets/images/header/moex-logo-1.svg";
import LogoMoex2 from "@/assets/images/header/moex-logo-2.svg";
import LogoSK from "@/assets/images/header/logo-sk.png";

interface HeaderProps {
  onLoginClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <header className="header">
          <div className="header__logos">
            <img
              className="header__logo--main"
              src={Logo}
              alt="Логотип компании"
            />
            <div className="header__logos-moex">
              <div>
                <img className="header__logo--moex" src={LogoMoex1} />
              </div>
              <div>
                <img className="header__logo--moex" src={LogoMoex2} />
              </div>
            </div>
          </div>

          <div className="header__lk">
            <button
              className="btn-scale"
              onClick={onLoginClick}
              aria-label="Войти в личный кабинет"
            >
              Личный кабинет
            </button>
          </div>

          <div className="header__sk">
            <a href="https://sk.ru" target="_blank" rel="noopener noreferrer">
              <img src={LogoSK} />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};
