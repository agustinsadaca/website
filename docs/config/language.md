---
id: language
title: language 
---

To localize and update the messages used in Grid.js.

 - `optional`
 - Type: `{ [key: string]: string | (...args) => string }`
 - Example: [Internationalization](./examples/i18n.md)

```js
new Grid({
  // ...
  language: {
    'search': {
      'placeholder': '🔍 Search...'
    },
    'pagination': {
      'previous': '⬅️',
      'next': '➡️',
      'showing': '😃 Displaying',
      'results': () => 'Records'
    }
  }
});
```

<br/>

:::tip
See [en_US](https://github.com/grid-js/gridjs/blob/master/packages/gridjs/src/i18n/en_US.ts) for a full list of messages.
:::
