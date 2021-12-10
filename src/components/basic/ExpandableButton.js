import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import '../../stylesheets/ExpandableButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';
import close from '../../images/close.svg';

class ExpandableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleClick() {
    this.setState((prevState) => (
      {
        isOpen: !prevState.isOpen,
      }
    ));
  }

  render() {
    const { isOpen } = this.state;
    const { initialIconSrc, subsequentIconSrc } = this.props;

    const closeIconButton = (
      <IconButton
        src={subsequentIconSrc}
        alt="Close Icon"
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );

    const initialIconButton = (
      <IconButton
        src={initialIconSrc}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );

    const iconButton = isOpen ? closeIconButton : initialIconButton;

    return iconButton;
  }
}

ExpandableButton.propTypes = {
  initialIconSrc: PropTypes.string,
  subsequentIconSrc: PropTypes.string,
};

ExpandableButton.defaultProps = {
  initialIconSrc: defaultIcon,
  subsequentIconSrc: close,
};

export default ExpandableButton;
