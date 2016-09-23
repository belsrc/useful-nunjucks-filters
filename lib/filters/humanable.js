'use strict';

/**
 * Converts a slug to a more human friendly form.
 *
 * @example
 * // foo = 'this-is-a-slug';
 * {{ foo | humanable }}
 * // => This is a slug
 *
 * @param  {String} input The input string.
 * @return {String}
 */
module.exports = function(input) {
  if(input == null || typeof input !== 'string') {
    throw new Error('input needs to be a string');
  }

  let words = input.split(/[-_]+/g);
  let complete = words.join(' ');
  let capital = complete.charAt(0).toUpperCase();

  return capital + complete.slice(1);
};
