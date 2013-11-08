
# on-select

  Invoke a callback on user selection

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

  Invoke `fn(e)` when a user selects within `el`.

## License

  MIT
