'use strict';

const assert = require('chai').assert;
const currency = require('./../lib/filters/currency');

suite('Currency Tests', () => {
  test('Throws for string', done => {
    assert.throws(() => currency('String'), Error, 'input needs to be a number');
    done();
  });

  test('Throws for NaN', done => {
    assert.throws(() => currency(NaN), Error, 'input needs to be a number');
    done();
  });

  test('Does NOT throw for numeric string', done => {
    assert.doesNotThrow(() => currency('0.34'), Error, 'input needs to be a number');
    done();
  });

  test('Returns correct value, default sign ($)', done => {
    let actual = currency(102432.56);
    let expected = '$102,432.56';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct value, given sign (€)', done => {
    let actual = currency(102432.56, '€');
    let expected = '€102,432.56';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct decimal value', done => {
    let actual = currency(.56);
    let expected = '$0.56';
    assert.strictEqual(actual, expected);
    done();
  });
});
