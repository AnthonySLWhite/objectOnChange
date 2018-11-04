const isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};
const onChange = (object, onChange) => {
  if (isNaN(object) || Array.isArray(object)) {
    if (isFunction(onChange)) {
      const handler = {
        get(target, property, receiver) {
          try {
            return new Proxy(target[property], handler);
          } catch (err) {
            return Reflect.get(target, property, receiver);
          }
        },
        defineProperty(target, property, descriptor) {
          onChange();
          return Reflect.defineProperty(target, property, descriptor);
        },
        deleteProperty(target, property) {
          onChange();
          return Reflect.deleteProperty(target, property);
        }
      };

      const proxy = new Proxy(object, handler);
      if (!Array.isArray(object)) {
        proxy.SetState = function(obj) {
          Object.keys(obj).map(prop => (proxy[prop] = obj[prop]));
        };
      }
      return proxy;
    }

    console.error('The watcher did not get a function to be activated!');
    return 0;
  }

  console.error('The target object cannot be a number!');
  return 0;
};

export default onChange;

/*<=========================================>
<             Testing              >
<=========================================>*/
// const watch = {};
// watch.list = onChange({}, () => console.log(watch.list));

// watch.list.a = { b: 55 };
// watch.list.b = [];
// watch.list.b.push("sup");
// console.log(watch.list);
// console.log(watch);
