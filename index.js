
/**
 * Dependencies
 */

var event = require('event');
var raf = require('raf');
var caf = raf.cancel;

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

/**
 * Check if there's a selection.
 *
 * @return {Boolean}
 * @api public
 */

function selected(){
  var range = selection.getRangeAt(0);
  return range.startOffset < range.endOffset;
};

/**
 * Check if the keyup event is a modifier.
 *
 * @param {Event} e
 * @return {Boolean}
 * @api public
 */

function mod(e){
  return e.shiftKey
    || e.altKey
    || e.ctrlKey
    || e.metaKey;
}
