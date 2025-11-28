import React from "react";
import styles from "./style.module.scss";
export const Invite: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className={styles.invite}>
          <div className={styles.inviteContainer}>
            <div className={styles.inviteContainerLeft}></div>
            <div className={styles.inviteContainerRight}>
              <div className={styles.inviteHeader}>
                Приглашаем к участию в нашем проекте!
              </div>
              <div className={styles.inviteText}>
                Для участия в проекте переходите в телеграмм-бот по ссылке ниже.
                Свежие новости и обновления, интересные статьи и истории успеха
                от нашей команды можно найти в телеграмм канале ФЛИП
              </div>
              <div className={styles.inviteBtns}>
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
                  className={`btn-scale ${styles.transparent}`}
                >
                  Телеграмм канал
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
