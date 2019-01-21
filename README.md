# Swift-OnChange

Swift-OnChange is inpired on the [on-change] project

## Installation

Use the package manager [NPM](https://www.npmjs.com/package/swift-onchange) to install Swift-OnChange.

```bash
npm i swift-onchange
```

## Usage

onChange takes 3 arguments

- (required) Callback function
- (optional) Original object, array or primitive value
- (optional) Create a setState property (1 for true)

```javascript
import onChange from "swift-onchange";

const originalObject = { a: 1 };

const objectWatch = onChange(
  e => console.log(`The value was changed to ${e}`),
  originalObject,
  1
);

console.log("objectWatch:", objectWatch);
// objectWatch: { a: 1, SetState: [Function] }

objectWatch.a = 2;
// The value was changed to 2

objectWatch.setState({
  b: 34,
  c: 9,
  d: {
    anotherChain: 4
  }
});
// The value was changed to
// {"a":2,"b":34,"c":9,"d":{"anotherChain":4}}

console.log("Chained changes watcher and SetState: ", objectWatch.d);
//Chained changes watcher and SetState:
// { anotherChain: 4, SetState: [Function] }
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[on-change]: https://github.com/sindresorhus/on-change
