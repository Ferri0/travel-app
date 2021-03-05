import React from 'react';
import PropTypes from 'prop-types';
import s from './BlockOne.module.scss';

export default class BlockOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { borderColor: 'red' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { borderColor } = this.state;
    e.target.classList.toggle(s.redBorder);
    if (borderColor === 'red') {
      this.setState({ borderColor: 'black' });
    } else {
      this.setState({ borderColor: 'red' });
    }
  }

  render() {
    const { childElem } = this.props;
    const { borderColor } = this.state;
    return (
      <div className={[s.blockOne, s[`${borderColor}Border`]].join(' ')}>
        {childElem}
        <button type="button" className={s.button} onClick={this.handleClick}>
          change border!
        </button>
      </div>
    );
  }
}

BlockOne.propTypes = {
  childElem: PropTypes.element.isRequired,
};
