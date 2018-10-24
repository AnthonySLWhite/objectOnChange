import '../css/style.css';
import _watch from './watcher';

const props = {};
props.list = _watch(['apples', 'oranges', 'crackers'], refreshList);
function refreshList() {
  const template = ['<option>', '</option>'];
  let final;
  props.list.map(x => (final += template[0] + x + template[1])); /*?*/
  document.getElementById('dropdown').innerHTML = final;
  console.log('changed');
  console.log(props.list);
  return 1;
}

const textArea = document.getElementById('text');
window.onload = function() {
  document.getElementById('change').onclick = () =>
    props.list.push(textArea.value);
};
