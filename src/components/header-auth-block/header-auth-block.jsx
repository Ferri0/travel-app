import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowAuth, setCurrentUser, setAuthorized } from '../../action';
import style from './header-auth-block.module.scss';

const authorizeText = {
    ru: "Авторизироваться",
    en: "Authorize",
    ua: "Авторизуватися"
}

const exitText = {
    ru: "Выйти",
    en: "Log out",
    ua: "Вийти"
}

const welcomeText = {
    ru: "Добро пожаловать",
    en: "Welcome",
    ua: "Вітаємо"
}

function HeaderAuthBlock(props) {
    const { lang, isAuthorized, currentUser, setShowAuthAction, setAuthorizedAction, setCurrentUserAction } = props;
    if (!isAuthorized) {
        return (
            <div className = {style.headerAuthBlockWrapper}>
              <button type="button"
              className = {style.headerAuthBlockButton}
              onClick = {() => setShowAuthAction(true)}>{authorizeText[lang]}</button>
            </div>
        );
    } else {
        return (
            <div className = {style.headerAuthBlockWrapper}>
                <span className = {style.headerAuthBlockText}>{welcomeText[lang]}, {currentUser}</span>
              <button type="button"
              className = {style.headerAuthBlockButton}
              onClick = {() => {
                  setAuthorizedAction(false);
                  setCurrentUserAction(null);
              }
                }>{exitText[lang]}</button>
            </div>
        );
    }

}

const mapStateToProps = ({
    showplacesList: { lang, isAuthorized, currentUser },
}) => ({ lang, isAuthorized, currentUser });

const mapDispatchToProps = (dispatch) => ({
    setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
    setAuthorizedAction: (value) => dispatch(setAuthorized(value)),
    setCurrentUserAction: (value) => dispatch(setCurrentUser(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAuthBlock);