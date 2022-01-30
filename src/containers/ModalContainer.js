import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/main.css';
import Modal from '../components/modals/Modal';

// Need modalOpenstate, sideMenuOpenState
class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }));
  }

  render() {
    const { modalOpen } = this.state;
    const { content, modal } = this.props;

    const contentStyle = modalOpen
      ? {
        filter: 'brightness(.4) blur(3px)',
        backgroundColor: 'rgba(0,0,0,.2)',
      }
      : {
        filter: 'brightness(1) blur(0)',
        backgroundColor: 'rgba(0,0,0,0)',
      };
    const selectableClass = modalOpen ? ' unselectable' : '';

    return (
      <>
        <div
          className={`modal-container${selectableClass}`}
          style={contentStyle}
        >
          {content}
          <button
            type="button"
            onClick={this.handleClick}
          >
            Open Modal
          </button>
        </div>
        {modalOpen && modal}
      </>
    );
  }
}

ModalContainer.propTypes = {
  content: PropTypes.node,
  modal: PropTypes.node,
};

ModalContainer.defaultProps = {
  content: <p>Content Here</p>,
  modal: <Modal />,
};

export default ModalContainer;
