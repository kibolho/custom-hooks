# useStorageState

>

[![NPM](https://img.shields.io/npm/v/use-storage-state.svg)](https://www.npmjs.com/package/use-storage-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-storage-state
```

## Usage

```jsx
import React from 'react'

import useStorageState from 'use-storage-state'

const Example = () => {
  const [counter, setCounter] = useLocalStorage(_,'counter', 0);
  return (
    <>
      <div>{counter}</div>
      <button onPress={setCounter(prev=>prev++)}>+</button>
      <button onPress={setCounter(prev=>prev--)}>-</button>
    </>
  )
}
```

## License

MIT © [kibolho](https://github.com/kibolho)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
