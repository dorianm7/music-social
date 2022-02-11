import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/DropDown.css';
import { renderIcon } from '../Icons';

function DropDown(props) {
  const [open, setOpen] = useState(false);
  const {
    title,
    titleBarIconName,
    showTitleBarIcon,
    content,
  } = props;
  const triangleOrientation = open ? 'down' : 'up';

  return (
    <div className="drop-down">
      <button
        type="button"
        className="title-bar center-row"
        onClick={() => setOpen(!open)}
      >
        <p className="title">{title}</p>
        {renderIcon('triangle', `expand-collapse-icon ${triangleOrientation}`)}
        {showTitleBarIcon && renderIcon(titleBarIconName, 'title-bar-icon')}
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
  title: PropTypes.string,
  titleBarIconName: PropTypes.string,
  showTitleBarIcon: PropTypes.bool,
  content: PropTypes.node,
};

DropDown.defaultProps = {
  title: 'Drop Down',
  titleBarIconName: 'none',
  showTitleBarIcon: false,
  content: 'Content',
};

export default DropDown;
