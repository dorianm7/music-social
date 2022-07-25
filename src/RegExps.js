// RFC 5322 Compliant Email RegExp
const VALID_EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/g;
const HAS_NUM_REGEXP = /[0-9]/;
const HAS_SPECIAL_CHAR_REGEXP = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

export {
  VALID_EMAIL_REGEXP,
  HAS_NUM_REGEXP,
  HAS_SPECIAL_CHAR_REGEXP,
};
