const isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};
const _watch = (type, activator, warn) => {
  if (isNaN(type) || Array.isArray(type)) {
    if (isFunction(activator)) {
      const proxy = new Proxy(type, {
        set: (obj, prop, value) => {
          if (Array.isArray(type) && prop === 'length') {
            obj[prop] = value;
            return 1;
          }
          if (warn && prop in obj) {
            console.error('Property already exists: ', prop);
          }
          obj[prop] = value;
          activator();
          return 1;
        }
      });
      if (!Array.isArray(type)) {
        proxy.SetState = function(object) {
          Object.keys(object).map(obj => (proxy[obj] = object[obj]));
        };
      }
      return new proxy();
    }
    console.error('The watcher did not get a function to be activated!');
    return 0;
  }
  console.error('The target object cannot be a number!');
  return 0;
};

export default _watch;

/*<=========================================>
<             TESTS              >
<=========================================>*/

// const props = {};
// props.list = _watch([], () => console.log('Changed!!'));
// props.list.push(5); /*?*/
// props.list = ['apples', 'oranges', 'crackers'];
// props.list.push(5); /*?*/
