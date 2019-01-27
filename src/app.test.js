import onChange from './app';

const originalObject = { a: 1 };
const objectWatch = onChange(
  e => console.log(`The object: ${JSON.stringify(objectWatch)}`),
  originalObject,
  1,
);
console.log('Original:', objectWatch);
// Original: { a: 1, SetState: [Function] }
objectWatch.a = 2;
// The value was changed to 2

objectWatch.SetState({
  b: 34,
  c: 9,
  d: {
    anotherChain: 4,
  },
});
// The value was changed to {b:34,c:9}
console.log(
  'Chained changes watcher and SetState: ',
  objectWatch.d,
);

objectWatch.a = { b: { c: 5 } };
//{a:}

// const watch = {};
// watch.list = onChange(e => console.log('Changed!', e), []);
// watch.list[0] = 5;
// watch.list[3] = 67;
// console.log(watch.list);
// watch.list.a = { b: 5 };
// watch.list.a.SetState({ hello: 'Works' });
// watch.list.b = {};
// watch.list.b.SetState({ works: 1 });
// console.log(watch.list.b);
// watch.list.a = { b: 55 };
// watch.list.b = [];
// watch.list.b.push('sup');
// watch.list.a = { c: 35 };
// watch.list.a.c = 44;
// console.log(watch.list);
// console.log(watch.list.SetState({ hello: 123 }));
// console.log(watch.list);
