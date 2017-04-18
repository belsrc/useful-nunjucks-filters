'use strict';

const nunjucks = require('nunjucks');

module.exports = function(env) {
  if(!env) {
    throw new Error('The argument cannot be null');
  }

  let filters = require('./filters');

  for(let key in filters) {
    let fn = filters[key];
    env.addFilter(key, fn);
  }
};
