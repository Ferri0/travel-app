import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowAuth } from '../../action';
import style from './header-auth-block.module.scss';

const authorizeText = {
    ru: "Авторизироваться:",
    en: "Authorize",
    ua: "Авторизуватися"
}

function HeaderAuthBlock(props) {
    const { lang, isAuthorized, setShowAuthAction } = props;
    if (!isAuthorized) {
        return (
            <div className = {style.headerAuthBlockWrapper}>
              <button type="button"
              className = {style.headerAuthBlockButton}
              onClick = {() => setShowAuthAction(true)}>{authorizeText[lang]}</button>
            </div>
        );
    }

}

const mapStateToProps = ({
    showplacesList: { lang, isAuthorized },
}) => ({ lang, isAuthorized });

const mapDispatchToProps = (dispatch) => ({
    setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAuthBlock);