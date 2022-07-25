const NBSP_UNICODE = '\u00A0';

function spaceToNbsp(string) {
  return string.replaceAll(' ', NBSP_UNICODE);
}

export {
  NBSP_UNICODE,
  spaceToNbsp,
};
