import React from 'react';

const CHECK_NAME = 'check';
const X_NAME = 'x';
const VERTICAL_DOTS_NAME = 'vertical-dots';
const EXCLAMATION_NAME = 'exclamation';
const HAMBURGER_MENU_NAME = 'hamburger-menu';
const PLUS_NAME = 'plus';
const TRIANGLE_NAME = 'triangle';
const OPEN_EYE_NAME = 'open-eye';
const CLOSED_EYE_NAME = 'closed-eye';
const DEFAULT_NAME = 'default';

const CHECK_PATH_DATA = 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z';
const X_PATH_DATA = 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';
const VERTICAL_DOTS_PATH_DATA = 'M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z';
const EXCLAMATION_PATH_DATA = 'M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z';
const HAMBURGER_MENU_PATH_DATA = 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z';
const PLUS_PATH_DATA = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
const TRIANGLE_PATH_DATA = 'M1,21H23L12,2';
const OPEN_EYE_PATH_DATA = 'M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z';
const CLOSED_EYE_PATH_DATA = 'M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z';
const DEFAULT_PATH_DATA = 'M11 15.5H12.5V17H11V15.5M12 6.95C14.7 7.06 15.87 9.78 14.28 11.81C13.86 12.31 13.19 12.64 12.85 13.07C12.5 13.5 12.5 14 12.5 14.5H11C11 13.65 11 12.94 11.35 12.44C11.68 11.94 12.35 11.64 12.77 11.31C14 10.18 13.68 8.59 12 8.46C11.18 8.46 10.5 9.13 10.5 9.97H9C9 8.3 10.35 6.95 12 6.95M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12Z';

function renderIconPathElement(pathData) {
  return React.createElement(
    'path',
    {
      fill: 'currentColor',
      d: pathData,
    },
  );
}

function nameToPathData(iconName) {
  let pathData;
  switch (iconName) {
    case CHECK_NAME:
      pathData = CHECK_PATH_DATA;
      break;
    case X_NAME:
      pathData = X_PATH_DATA;
      break;
    case VERTICAL_DOTS_NAME:
      pathData = VERTICAL_DOTS_PATH_DATA;
      break;
    case EXCLAMATION_NAME:
      pathData = EXCLAMATION_PATH_DATA;
      break;
    case HAMBURGER_MENU_NAME:
      pathData = HAMBURGER_MENU_PATH_DATA;
      break;
    case PLUS_NAME:
      pathData = PLUS_PATH_DATA;
      break;
    case TRIANGLE_NAME:
      pathData = TRIANGLE_PATH_DATA;
      break;
    case OPEN_EYE_NAME:
      pathData = OPEN_EYE_PATH_DATA;
      break;
    case CLOSED_EYE_NAME:
      pathData = CLOSED_EYE_PATH_DATA;
      break;
    default:
      pathData = DEFAULT_PATH_DATA;
      break;
  }
  return pathData;
}

function renderIcon(iconName, iconWidth = '20px', iconHeight = '20px', className = '') {
  return React.createElement(
    'svg',
    {
      width: iconWidth,
      height: iconHeight,
      viewBox: '0 0 24 24',
      className: `icon ${className}`,
    },
    renderIconPathElement(nameToPathData(iconName)),
  );
}

const Icons = {
  CHECK: renderIcon(CHECK_NAME),
  DEFAULT: renderIcon(DEFAULT_NAME),
  X: renderIcon(X_NAME),
  VERTICAL_DOTS: renderIcon(VERTICAL_DOTS_NAME),
  EXCLAMATION: renderIcon(EXCLAMATION_NAME),
  HAMBURGER_MENU: renderIcon(HAMBURGER_MENU_NAME),
  PLUS: renderIcon(PLUS_NAME),
  TRIANGLE: renderIcon(TRIANGLE_NAME),
  OPEN_EYE: renderIcon(OPEN_EYE_NAME),
  CLOSED_EYE: renderIcon(CLOSED_EYE_NAME),
};

export {
  renderIcon,
  Icons,
  CHECK_NAME,
  X_NAME,
  VERTICAL_DOTS_NAME,
  EXCLAMATION_NAME,
  HAMBURGER_MENU_NAME,
  PLUS_NAME,
  TRIANGLE_NAME,
  OPEN_EYE_NAME,
  CLOSED_EYE_NAME,
  DEFAULT_NAME,
};
