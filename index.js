// Import stylesheets
import './style.css';

// Write Javascript code!


document.getElementById('searchBox').addEventListener('keyup', function(){
  debounce();
})
let counter = 0;
function fetchData(){
  console.log("i am fetching  " + counter++);
}
function applyDebounce(fn, d){
  let timer;
  return function(){
    let context = this,
    args = arguments;
   clearTimeout(timer);
    timer = setTimeout(function(){
      fetchData.apply(context, arguments)
    },d);
  }
}

let debounce = applyDebounce(fetchData, 300);