const isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};
const _watch = (type, activator, warn) => {
  if (isFunction(activator)) {
    const proxy = new Proxy(type, {
      set: (obj, prop, value) => {
        console.log(`Object: ${obj}\n Property: ${prop}\n Value: ${value}`);
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
    return proxy;
  }
  console.error('The watcher did not get any function!');
  return 0;
};

export default _watch;
// const props = _watch(['test'], () => console.log('Changed!!'), 0);
