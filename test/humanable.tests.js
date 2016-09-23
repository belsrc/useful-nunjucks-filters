'use strict';

const assert = require('chai').assert;
const humanable = require('./../lib/filters/humanable');

suite('Humanable Tests', () => {
  test('Throws for null', done => {
    assert.throws(() => humanable(null), Error, 'input needs to be a string');
    done();
  });

  test('Throws for undefined', done => {
    assert.throws(() => humanable(undefined), Error, 'input needs to be a string');
    done();
  });

  test('Throws for non-string', done => {
    assert.throws(() => humanable(6546), Error, 'input needs to be a string');
    done();
  });

  test('Returns correctly parsed slug', done => {
    let actual = humanable('this-is-a-slug');
    let expected = 'This is a slug';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns correctl mixed slug', done => {
    let actual = humanable('this-is_a-mixed_slug');
    let expected = 'This is a mixed slug';
    assert.strictEqual(actual, expected);
    done();
  });

  test('Returns already humanable string', done => {
    let actual = humanable('This is a slug');
    let expected = 'This is a slug';
    assert.strictEqual(actual, expected);
    done();
  });
});
