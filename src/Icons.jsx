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
const GOOGLE_ICON_NAME = 'google';
const GOOGLE_COLOR_ICON_NAME = 'google-color';
const HOME_NAME = 'home';
const FOLLOWING_NAME = 'following';
const FOLLOWERS_NAME = 'followers';
const COMPARISONS_NAME = 'comparisons';
const SETTINGS_NAME = 'settings';
const LOG_OUT_NAME = 'log-out';
const CHEVRON_DOWN_NAME = 'chevron-down';
const GITHUB_NAME = 'github';
const WEB_NAME = 'web';
const LINKEDIN_NAME = 'linked-in';
const EMAIL_NAME = 'email';
const BACK_NAME = 'back';
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
const GOOGLE_ICON_PATH_DATA = 'M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z';
const HOME_PATH_DATA = 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z';
const FOLLOWING_PATH_DATA = 'M6 8C6 5.79 7.79 4 10 4S14 5.79 14 8 12.21 12 10 12 6 10.21 6 8M10 14C5.58 14 2 15.79 2 18V20H13.09C13.04 19.67 13 19.34 13 19C13 17.36 13.66 15.87 14.74 14.78C13.41 14.29 11.78 14 10 14M23 19L20 16V18H16V20H20V22L23 19Z';
const FOLLOWERS_PATH_DATA = 'M6 8C6 5.79 7.79 4 10 4S14 5.79 14 8 12.21 12 10 12 6 10.21 6 8M10 14C5.58 14 2 15.79 2 18V20H13.09C13.04 19.67 13 19.34 13 19C13 17.36 13.66 15.87 14.74 14.78C13.41 14.29 11.78 14 10 14M18 18V16L15 19L18 22V20H22V18H18Z';
const COMPARISONS_PATH_DATA = 'M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12';
const SETTINGS_PATH_DATA = 'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z';
const LOG_OUT_PATH_DATA = 'M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z';
const CHEVRON_DOWN_PATH_DATA = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z';
const GITHUB_PATH_DATA = 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z';
const WEB_PATH_DATA = 'M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z';
const LINKEDIN_PATH_DATA = 'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z';
const EMAIL_PATH_DATA = 'M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z';
const BACK_PATH_DATA = 'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z';
const DEFAULT_PATH_DATA = 'M11 15.5H12.5V17H11V15.5M12 6.95C14.7 7.06 15.87 9.78 14.28 11.81C13.86 12.31 13.19 12.64 12.85 13.07C12.5 13.5 12.5 14 12.5 14.5H11C11 13.65 11 12.94 11.35 12.44C11.68 11.94 12.35 11.64 12.77 11.31C14 10.18 13.68 8.59 12 8.46C11.18 8.46 10.5 9.13 10.5 9.97H9C9 8.3 10.35 6.95 12 6.95M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12Z';

const GOOGLE_COLOR_ICON_PATHS = (
  <>
    <path fill="#EA4335" d="M 12 4.75 C 13.769531 4.75 15.355469 5.359375 16.605469 6.550781 L 20.03125 3.125 C 17.949219 1.191406 15.234375 0 12 0 C 7.308594 0 3.253906 2.691406 1.28125 6.609375 L 5.269531 9.703125 C 6.214844 6.859375 8.871094 4.75 12 4.75 Z M 12 4.75" />
    <path fill="#4285F4" d="M 23.488281 12.273438 C 23.488281 11.488281 23.414062 10.730469 23.300781 10 L 12 10 L 12 14.511719 L 18.46875 14.511719 C 18.179688 15.988281 17.339844 17.25 16.078125 18.101562 L 19.945312 21.101562 C 22.199219 19.011719 23.488281 15.921875 23.488281 12.273438 Z M 23.488281 12.273438" />
    <path fill="#FBBC05" d="M 5.265625 14.296875 C 5.023438 13.570312 4.886719 12.800781 4.886719 12 C 4.886719 11.199219 5.019531 10.429688 5.265625 9.703125 L 1.273438 6.609375 C 0.460938 8.230469 0 10.058594 0 12 C 0 13.941406 0.460938 15.769531 1.28125 17.390625 Z M 5.265625 14.296875" />
    <path fill="#34A853" d="M 12 24 C 15.238281 24 17.964844 22.933594 19.945312 21.09375 L 16.078125 18.09375 C 15.003906 18.820312 13.621094 19.246094 12 19.246094 C 8.871094 19.246094 6.214844 17.136719 5.265625 14.289062 L 1.273438 17.386719 C 3.253906 21.308594 7.308594 24 12 24 Z M 12 24" />
  </>
);

function renderIconPathElement(pathData) {
  return React.createElement(
    'path',
    {
      fill: 'currentColor',
      d: pathData,
    },
  );
}

function renderIconGroupElement(children) {
  return React.createElement(
    'g',
    {},
    children,
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
    case GOOGLE_ICON_NAME:
      pathData = GOOGLE_ICON_PATH_DATA;
      break;
    case HOME_NAME:
      pathData = HOME_PATH_DATA;
      break;
    case FOLLOWING_NAME:
      pathData = FOLLOWING_PATH_DATA;
      break;
    case FOLLOWERS_NAME:
      pathData = FOLLOWERS_PATH_DATA;
      break;
    case COMPARISONS_NAME:
      pathData = COMPARISONS_PATH_DATA;
      break;
    case SETTINGS_NAME:
      pathData = SETTINGS_PATH_DATA;
      break;
    case LOG_OUT_NAME:
      pathData = LOG_OUT_PATH_DATA;
      break;
    case CHEVRON_DOWN_NAME:
      pathData = CHEVRON_DOWN_PATH_DATA;
      break;
    case GITHUB_NAME:
      pathData = GITHUB_PATH_DATA;
      break;
    case WEB_NAME:
      pathData = WEB_PATH_DATA;
      break;
    case LINKEDIN_NAME:
      pathData = LINKEDIN_PATH_DATA;
      break;
    case EMAIL_NAME:
      pathData = EMAIL_PATH_DATA;
      break;
    case BACK_NAME:
      pathData = BACK_PATH_DATA;
      break;
    default:
      pathData = DEFAULT_PATH_DATA;
      break;
  }
  return pathData;
}

function renderChildren(iconName) {
  let children;
  switch (iconName) {
    case GOOGLE_COLOR_ICON_NAME:
      children = renderIconGroupElement(GOOGLE_COLOR_ICON_PATHS);
      break;
    default:
      children = renderIconPathElement(nameToPathData(iconName));
      break;
  }

  return children;
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
    renderChildren(iconName),
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
  GOOGLE_ICON: renderIcon(GOOGLE_ICON_NAME),
  HOME: renderIcon(HOME_NAME),
  FOLLOWING: renderIcon(FOLLOWING_NAME),
  FOLLOWERS: renderIcon(FOLLOWERS_NAME),
  COMPARISONS: renderIcon(COMPARISONS_NAME),
  SETTINGS: renderIcon(SETTINGS_NAME),
  LOG_OUT: renderIcon(LOG_OUT_NAME),
  CHEVRON_DOWN: renderIcon(CHEVRON_DOWN_NAME),
  GITHUB: renderIcon(GITHUB_NAME),
  WEB: renderIcon(WEB_NAME),
  LINKEDIN: renderIcon(LINKEDIN_NAME),
  EMAIL: renderIcon(EMAIL_NAME),
  BACK: renderIcon(BACK_NAME),
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
  GOOGLE_ICON_NAME,
  GOOGLE_COLOR_ICON_NAME,
  HOME_NAME,
  FOLLOWING_NAME,
  FOLLOWERS_NAME,
  COMPARISONS_NAME,
  SETTINGS_NAME,
  LOG_OUT_NAME,
  CHEVRON_DOWN_NAME,
  GITHUB_NAME,
  WEB_NAME,
  LINKEDIN_NAME,
  EMAIL_NAME,
  BACK_NAME,
  DEFAULT_NAME,
};