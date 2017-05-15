const assert = require('assert');
const normalizeEmptyString = require('../index.js');

describe('normalizeEmptyString', function () {
  it('should normalize empty string', function () {
    const objectWithEmptyStringProperty = {
      hello: ''
    };

    const normalized = normalizeEmptyString(objectWithEmptyStringProperty)
    const normalizedProperty = normalized.hello === 'NULL';

    assert(normalizedProperty, `hello value is now 'NULL'`);
  });

  it('should leave the none empty string properties as is', function () {
    const objectWithNonEmptyStringProperty = {
      hello: 'world'
    };

    const normalized = normalizeEmptyString(objectWithNonEmptyStringProperty)
    const untouchedProperty = normalized.hello === 'world';

    assert(untouchedProperty, `hello value should be 'world'`);
  });
});
