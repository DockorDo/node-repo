
const dom = document.querySelector('#app');
console.log(dom);

let idx = 0;
setInterval(()=>{
    dom.innerHTML = idx;
    idx++
},1000)