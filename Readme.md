
# on-select

  Invoke a callback when the user selects text in the page using the mouse or the keyboard.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/on-select

## Example

```js
var onselect = require('on-select');
var unbind = onselect(el, selected);

function selected(e){
  console.log(e);
  unbind();
}
```

## API

#### onselect(el, fn)

  Invoke `fn(e, str)` when a user selects within `el`.

  `str` is the user selected text.

## License

  MIT
