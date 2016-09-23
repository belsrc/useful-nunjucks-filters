'use strict';

/**
 * Converts the given value to its past tense.
 * Simple filter, does not support irregular verbs such as eat-ate, fly-flew, etc.
 *
 * @example
 * // foo = 'code'
 * {{ foo | past_tense }}
 * // => coded
 *
 * @example
 * // foo = 'panic'
 * {{ foo | past_tense }}
 * // => panicked
 *
 * @example
 * // foo = 'laugh'
 * {{ foo | past_tense }}
 * // => laughed`
 *
 * @param  {String}  input    The input string.
 * @return {String}
 */
module.exports = function(input) {
  // Slightly follows https://en.oxforddictionaries.com/spelling/verb-tenses-adding-ed-and-ing
  // Not all the 'rules' have been added as I'm lazy and the English language is dumb when
  // it comes to all the different rules.

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if(input == null || typeof input !== 'string') {
    throw new Error('input needs to be a string');
  }

  let last = input.toLowerCase().substr(input.length - 1);
  let secondLast = input.toLowerCase().substr(input.length - 2, 1);
  let thirdLast = input.toLowerCase().substr(input.length - 3, 1);
  let lastTwo = input.toLowerCase().substr(input.length - 2);
  let lastThree = input.toLowerCase().substr(input.length - 3);

  function inArray(ar, value) {
    return ar.indexOf(value) != -1;
  }

  // participle or already past tense, don't want
  if(lastThree === 'ing' || lastTwo === 'ed') {
    return input;
  }

  // Ends in 'e', simply add the 'd'
  if(last === 'e') {
    return `${ input }d`;
  }

  // Ends in 'c', add the 'ked'
  if(last === 'c') {
    return `${ input }ked`;
  }

  // Ends with consonant, vowel, consonant. I'm simple, double consonant and add 'ed'
  if(!inArray(vowels, thirdLast) && inArray(vowels, secondLast) && !inArray(vowels, last)) {
    return `${ input + last }ed`;
  }

  return `${ input }ed`;
};
