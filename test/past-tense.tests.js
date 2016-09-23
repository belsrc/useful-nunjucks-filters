'use strict';

const assert = require('chai').assert;
const past = require('./../lib/filters/past-tense');

suite('Past Tense Tests', () => {
  test('Throws for null', done => {
    assert.throws(() => past(null), Error, 'input needs to be a string');
    done();
  });

  test('Throws for undefined', done => {
    assert.throws(() => past(undefined), Error, 'input needs to be a string');
    done();
  });

  test('Throws for non-string', done => {
    assert.throws(() => past(6546), Error, 'input needs to be a string');
    done();
  });

  test('Returns correct "ed"', done => {
    let actual = past('walk');
    let expected = 'walked';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct silent "e"', done => {
    let actual = past('code');
    let expected = 'coded';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct silent "e", double vowel', done => {
    let actual = past('free');
    let expected = 'freed';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct vowel + consonant (1)', done => {
    let actual = past('commit');
    let expected = 'committed';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct vowel + consonant (2)', done => {
    let actual = past('treat');
    let expected = 'treated';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correct ending in "c"', done => {
    let actual = past('panic');
    let expected = 'panicked';
    assert.strictEqual(actual, expected);
    done();
  });
});
