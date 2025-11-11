import React from "react";
import Logo from "../../assets/images/header/logo-main.svg";
import LogoMoex1 from "../../assets/images/header/moex-logo-1.svg";
import LogoMoex2 from "../../assets/images/header/moex-logo-2.svg";
import LogoSK from "../../assets/images/header/logo-sk.png";

const Header: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__logos">
          <img className="header__logo--main" src={Logo} alt="" />
          <div className="header__logos-moex">
            <div>
              <img className="header__logo--moex" src={LogoMoex1} alt="" />
            </div>
            <div>
              <img className="header__logo--moex" src={LogoMoex2} alt="" />
            </div>
          </div>
        </div>
        <div className="header__lk">
          <a className="btn-scale" href="javascript:void(0);">
            Личный кабинет
          </a>
        </div>
        <div className="header__sk">
          <a href="//sk.ru" target="_blank">
            <img src={LogoSK} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
