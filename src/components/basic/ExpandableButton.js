import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import '../../stylesheets/ExpandableButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';
import close from '../../images/close.svg';

class ExpandableButton extends React.Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // console.log(this.myRef.current);
  }

  componentWillUnmount() {
    //
  }

  handleClick() {
    this.setState((prevState) => (
      {
        isOpen: !prevState.isOpen,
      }
    ));
    window.alert('handleClick Clicked!');
  }

  render() {
    const { isOpen } = this.state;
    const { src } = this.props;
    const closeIconButton = <IconButton src={close} alt="Close Icon" onClick={this.handleClick} onKeyUp={this.handleClick} />;
    const initialIconButton = (
      <IconButton
        src={src}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );
    const iconButton = isOpen ? closeIconButton
      : initialIconButton;

    return iconButton;
  }
}

ExpandableButton.propTypes = {
  src: PropTypes.string,
};

ExpandableButton.defaultProps = {
  src: defaultIcon,
};

export default ExpandableButton;
