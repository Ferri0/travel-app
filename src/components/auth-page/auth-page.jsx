import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowAuth, setAuthorized, setCurrentUser } from '../../action';
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
const errorText = {
  ok:{
    en:'',
    ru:'',
    ua:''
  },
  wrongUser:{
    en:'User not found',
    ru:'Пользователь не найден',
    ua:'Користувача не знайдено'
  },
  wrongPassword:{
    en:'Wrong password',
    ru:'Неправильный пароль',
    ua:'Неправильний пароль'
  },
  error:{
    en:'Something went wrong',
    ru:'Что-то пошло не так',
    ua:'Щось пішло не так'
  },
  userExists:{
    en:'User exists',
    ru:'Пользователь уже существует',
    ua:'Користувач вже існує'
  },
  nameIsTooShort:{
    en:'User name is too short',
    ru:'Имя пользователя слишком короткое',
    ua:"Ім'я користувача занадто коротке"
  }
}



function AuthPage(props) {
    const { lang, isShowAuth, setShowAuthAction, setAuthorizedAction, setCurrentUserAction } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [errorType, setErrorType] = useState('ok');

    
    function loginHandler(user, pass) {
      showplaceService.login(user, pass).then(res => {
        if (res === 'ok') {
          setCurrentUserAction(user);
          localStorage.setItem('travel-app-current-user', user);
          localStorage.setItem('travel-app-isAuth', true);
          setAuthorizedAction(true);
          setShowAuthAction(false)
        } 
        setErrorType(res);
      });
    }

    function registerHandler(user, pass) {
      showplaceService.register(user, pass).then(res => {
        if (res === 'ok') {
          setCurrentUserAction(user);
          localStorage.setItem('travel-app-current-user', user);
          localStorage.setItem('travel-app-isAuth', true);
          setAuthorizedAction(true);
          setShowAuthAction(false)
        } 
        setErrorType(res);
      });
    }

    return (
      <div className={isShowAuth ? style.authPageWrapper : style.authPageWrapperHidden}>
            <span className = {style.authPageHeader}>{ headerText[lang] }</span>
            <span className = {style.authPageError}>{ errorText[errorType][lang] }</span>
            <span className = {style.authPageText}>{ nameText[lang] }</span>
            <input  className={style.authPageInput} onChange = {event => setUsername(event.target.value)}/>
            <span className = {style.authPageText}>{ passwordText[lang] }</span>
            <input  className={style.authPageInput} onChange = {event => setPassword(event.target.value)}/>
            <button  type="button" className={style.authPageButton}
            onClick = {() => {
              loginHandler(username, password);
              }}>{ loginText[lang] }</button>
            <button  type="button" className={style.authPageButton}
            onClick = {() => {
              registerHandler(username, password);
              }}>{ registerText[lang] }</button>
            <button  type="button" className={style.authPageButton}
            onClick = {() => setShowAuthAction(false)}>{ closeText[lang] }</button>
      </div>
    );
  }
  
  const mapStateToProps = ({
    showplacesList: { lang, isShowAuth, isAuthorized, currentUser },
  }) => ({ lang, isShowAuth, isAuthorized, currentUser });

  const mapDispatchToProps = (dispatch) => ({
    setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
    setAuthorizedAction: (value) => dispatch(setAuthorized(value)),
    setCurrentUserAction: (value) => dispatch(setCurrentUser(value))
    });

  export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

  AuthPage.propTypes = {
    setShowAuthAction: PropTypes.func.isRequired,
    isShowAuth: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired,
    setAuthorizedAction: PropTypes.func.isRequired,
    setCurrentUserAction: PropTypes.func.isRequired
  }