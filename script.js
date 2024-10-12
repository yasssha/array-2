let arr = [1, 2, false, 'hello', 24, 'world', undefined, null,'error', 22 ]

console.log(arr);

let num = arr.filter( item => typeof item === 'number')

if(num.length >= 5){
    alert('good')
} else {
    alert('0_0')
}


console.log(num);
