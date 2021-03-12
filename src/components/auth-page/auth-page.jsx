import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowAuth } from '../../action';
import {ShowplaceService} from '../../services';
import style from './auth-page.module.scss';

const showplaceService = new ShowplaceService;

const headerText = {
    ru: "Введите имя пользователя и пароль",
    en: "Enter user name and password",
    ua: "Введіть ім'я користувача та пароль"
}
const nameText = {
    ru: "Имя:",
    en: "Name:",
    ua: "Ім'я:"
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
    const { lang, isShowAuth, setShowAuthAction } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    return (
      <div className={isShowAuth ? style.authPageWrapper : style.authPageWrapperHidden}>
            <span className = {style.authPageHeader}>{ headerText[lang] }</span>
            <span className = {style.authPageText}>{ nameText[lang] }</span>
            <input  className={style.authPageInput} onChange = {event => setUsername(event.target.value)}/>
            <span className = {style.authPageText}>{ passwordText[lang] }</span>
            <input  className={style.authPageInput} onChange = {event => setPassword(event.target.value)}/>
            <button  type="button" className={style.authPageButton}
            onClick = {() => {
                showplaceService.login(username, password).then(res => console.log(res))
              }}>{ loginText[lang] }</button>
            <button  type="button" className={style.authPageButton}>{ registerText[lang] }</button>
            <button  type="button" className={style.authPageButton}
            onClick = {() => setShowAuthAction(false)}>{ closeText[lang] }</button>
      </div>
    );
  }
  
  const mapStateToProps = ({
    showplacesList: { lang, isShowAuth },
  }) => ({ lang, isShowAuth });

  const mapDispatchToProps = (dispatch) => ({
    setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
    });

  export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

  AuthPage.propTypes = {
    setShowAuthAction: PropTypes.func.isRequired,
    isShowAuth: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired
  }