import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames';
import style from './style';

/**
 * Basic card content container. Good for
 * small descriptions or other supplementary text.
 */
class CardText extends Component {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

  render () {
    const {
      children,
      className,
      ...otherProps
    } = this.props;

    const classes = ClassNames(style.cardText, className);

    return (
      <div className={classes} {...otherProps}>
        {typeof children === 'string' ? <p>{children}</p> : children}
      </div>
    );
  }
}

export default CardText;