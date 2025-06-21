import React from 'react';
import snapchatLogo from '../../assets/snapchat.svg';
import facebookLogo from '../../assets/facebook1.svg';
import xLogo from '../../assets/twitter1.svg';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.info}>
        <h1>Контакты</h1>
        <ul className={styles.contactList}>
          <li>8 800 000 00 00</li>
          <li>emailexample@email.com</li>
        </ul>

        <form className={styles.form}>
          <div className={styles.inputsRow}>
            <input
              type="email"
              placeholder="Ваш email"
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className={styles.input}
            />
          </div>

          <textarea
            placeholder="Введите сообщение"
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      </div>

      <div className={styles.social}>
        <p className={styles.socialTitle}>Найдите нас:</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={snapchatLogo} alt="Snapchat" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xLogo} alt="X (бывший Twitter)" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
