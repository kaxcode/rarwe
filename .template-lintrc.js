'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-implici-this': {
      allow: [''] //required by ember-set-helper
    }
  }
}
