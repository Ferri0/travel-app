import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowAuth, setCurrentUser, setAuthorized } from '../../action';
import style from './header-auth-block.module.scss';

const authorizeText = {
  ru: 'Авторизация',
  en: 'Authorize',
  ua: 'Авторизація',
};

const exitText = {
  ru: 'Выйти',
  en: 'Log out',
  ua: 'Вийти',
};

const welcomeText = {
  ru: 'Добро пожаловать',
  en: 'Welcome',
  ua: 'Вітаємо',
};

function HeaderAuthBlock(props) {
    const { lang, isAuthorized, currentUser, setShowAuthAction, setAuthorizedAction, setCurrentUserAction } = props;

    useEffect(() => {
        if (localStorage.getItem('travel-app-current-user')) {
          setCurrentUserAction(JSON.parse(localStorage.getItem('travel-app-current-user')));
        }
        if (localStorage.getItem('travel-app-isAuth')) {
            setAuthorizedAction(JSON.parse(localStorage.getItem('travel-app-isAuth')));
          }
      });
      
    if (!isAuthorized) {
        return (
            <div className = {style.headerAuthBlockWrapper}>
              <button type="button"
              className = {style.headerAuthBlockButton}
              onClick = {() => setShowAuthAction(true)}>{authorizeText[lang]}</button>
            </div>
        );
    } 
        return (
            <div className = {style.headerAuthBlockWrapper}>
                <span className = {style.headerAuthBlockText}>{welcomeText[lang]}, {currentUser}</span>
              <button type="button"
              className = {style.headerAuthBlockButton}
              onClick = {() => {
                localStorage.setItem('travel-app-current-user', JSON.stringify(null));
                localStorage.setItem('travel-app-isAuth', JSON.stringify(false))
                  setAuthorizedAction(false);
                  setCurrentUserAction(null);
                  ;
              }
                }>{exitText[lang]}</button>
            </div>
        );
    

}

const mapStateToProps = ({
  showplacesList: { lang, isAuthorized, currentUser },
}) => ({ lang, isAuthorized, currentUser });

const mapDispatchToProps = (dispatch) => ({
  setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
  setAuthorizedAction: (value) => dispatch(setAuthorized(value)),
  setCurrentUserAction: (value) => dispatch(setCurrentUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAuthBlock);
