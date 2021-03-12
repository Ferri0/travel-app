import React from 'react';
import { connect } from 'react-redux';
import style from './auth-page.module.scss';

const headerText = {
    ru: "Введите имя пользователя и пароль",
    en: "Enter user name and password",
    ua: "Введіть ім\'я користувача та пароль"
}
const nameText = {
    ru: "Имя:",
    en: "Name:",
    ua: "Ім\'я:"
}
const passwordText = {
    ru: "Пароль:",
    en: "Password:",
    ua: "Пароль:"
}
const loginText = {
    ru: "Войти:",
    en: "Login",
    ua: "Увійти"
}
const registerText = {
    ru: "Зарегистрироваться:",
    en: "Register",
    ua: "Зареєструватися"
}
const closeText = {
    ru: "Закрыть:",
    en: "Close",
    ua: "Закрити"
}
function AuthPage(props) {
    const { lang } = props;
    return (
      <div className={style.authPageWrapper}>
            <span className = {style.authPageHeader}>{ headerText[lang] }</span>
            <span className = {style.authPageText}>{ nameText[lang] }</span>
            <input  className={style.authPageInput} />
            <span className = {style.authPageText}>{ passwordText[lang] }</span>
            <input  className={style.authPageInput} />
            <button  className={style.authPageButton}>{ loginText[lang] }</button>
            <button  className={style.authPageButton}>{ registerText[lang] }</button>
            <button  className={style.authPageButton}>{ closeText[lang] }</button>
      </div>
    );
  }
  
  const mapStateToProps = ({
    showplacesList: { lang },
  }) => ({ lang });

  export default connect(mapStateToProps)(AuthPage);