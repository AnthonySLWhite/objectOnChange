import '../css/style.css';
// import onChange from './watcher';
// import onChange from 'on-change';
import onChange from './objectOnChange';

const watch = {};
watch.list = onChange({}, () => console.log('Changed!'));

watch.list.a = { b: 55 };
watch.list.b = [];
watch.list.b.push('sup');
console.log(watch.list);
console.log(watch);

// const props = {};
// props.list = _watch([], refreshList);
// function refreshList() {
//   const template = ['<option>', '</option>'];
//   let final;
//   test.list.map(x => (final += template[0] + x + template[1])); /*?*/
//   document.getElementById('dropdown').innerHTML = final;
//   console.log('changed');
//   return 1;
// }
// props.list = ['apples', 'oranges', 'crackers'];
// const textArea = document.getElementById('text');
// window.onload = function() {
//   document.getElementById('change').onclick = () =>
//     props.list.push(textArea.value);
// };
