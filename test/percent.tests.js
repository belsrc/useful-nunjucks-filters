'use strict';

const assert = require('chai').assert;
const percent = require('./../lib/filters/percent');

suite('Percent Tests', () => {
  test('Throws for string', done => {
    assert.throws(() => percent('String'), Error, 'input needs to be a number');
    done();
  });

  test('Throws for NaN', done => {
    assert.throws(() => percent(NaN), Error, 'input needs to be a number');
    done();
  });

  test('Does NOT throw for numeric string', done => {
    assert.doesNotThrow(() => percent('0.34'), Error, 'input needs to be a number');
    done();
  });

  test('Returns correct value, default no decimals', done => {
    let actual = percent(0.98645);
    let expected = '98%';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct value, specified decimals', done => {
    let actual = percent(0.98645, 2);
    let expected = '98.64%';
    assert.strictEqual(actual, expected);
    done();
  });
});
