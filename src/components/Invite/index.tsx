import React from "react";
const Invite: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="invite">
        <div className="invite__container">
          <div className="invite__container-left"></div>
          <div className="invite__container-right">
            <div className="invite__header">
              Приглашаем к участию в нашем проекте!
            </div>
            <div className="invite__text">
              Для участия в проекте переходите в телеграмм-бот по ссылке ниже.
              Свежие новости и обновления, интересные статьи и истории успеха от
              нашей команды можно найти в телеграмм канале ФЛИП
            </div>
            <div className="invite__btns">
              <a
                href="https://t.me/mrflip_agents_bot"
                target="_blank"
                className="btn-scale"
              >
                Наш бот
              </a>
              <a
                href="https://t.me/mrflipnews"
                target="_blank"
                className="btn-scale transparent"
              >
                Телеграмм канал
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
