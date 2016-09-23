'use strict';

const nunjucks = require('nunjucks');

module.exports = function(env) {
  if(!(env instanceof nunjucks.Environment)) {
    throw new Error('The argument needs to be an instance of nunjucks.Environment');
  }

  let filters = require('./filters');

  for(let key in filters) {
    let fn = filters[key];
    env.addFilter(key, fn);
  }
};
