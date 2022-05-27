let ul = document.getElementById('ulId');

const arr = [];

for(let li of ul.children){
    arr.push(li.innerHTML);
}

console.log(arr);
