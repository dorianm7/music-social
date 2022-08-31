import React from 'react';
import PropTypes from 'prop-types';

import './DropDown.css';

import {
  renderIcon,
  IconNames,
} from '../../Icons';

function DropDown(props) {
  const {
    className,
    title,
    titleBarIconName,
    titleBarIconClassName,
    onTitleBarClick,
    showTitleBarIcon,
    content,
    open,
  } = props;
  const triangleOrientation = open ? 'down' : 'up';

  return (
    <div className={`drop-down ${className}`}>
      <button
        type="button"
        className="title-bar center-row"
        onClick={onTitleBarClick}
        aria-expanded={open}
      >
        <span className="title">{title}</span>
        {renderIcon(IconNames.TRIANGLE, `expand-collapse-icon ${triangleOrientation}`)}
        {showTitleBarIcon && !open && renderIcon(titleBarIconName, `title-bar-icon ${titleBarIconClassName}`)}
      </button>
      {open && (
        <div className="content">
          { content }
        </div>
      )}
    </div>
  );
}

DropDown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titleBarIconName: PropTypes.oneOf(Object.values(IconNames)),
  titleBarIconClassName: PropTypes.string,
  onTitleBarClick: PropTypes.func,
  showTitleBarIcon: PropTypes.bool,
  open: PropTypes.bool,
  content: PropTypes.node,
};

DropDown.defaultProps = {
  className: '',
  title: 'Drop Down',
  titleBarIconName: 'none',
  titleBarIconClassName: '',
  onTitleBarClick: () => {},
  showTitleBarIcon: false,
  open: false,
  content: 'Content',
};

export default DropDown;
