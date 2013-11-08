
/**
 * Dependencies
 */

var event = require('event');
var raf = require('raf');
var caf = raf.cancel;
var selected = require('text-selection');
var mod = require('modifier');

/**
 * Selection
 */

var selection = window.getSelection();

/**
 * Invoke `fn(e)` when a user selects within `el`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(el, fn){
  event.bind(el, 'mouseup', callback);
  event.bind(el, 'keyup', callback);

  var id;
  function callback(e){
    if (mod(e)) return;
    id = raf(function(){
      if (selected()) fn(e);
      caf(id);
    });
  }

  return function(){
    event.unbind(el, 'mouseup', callback);
    event.unbind(el, 'keyup', callback);
  }
};