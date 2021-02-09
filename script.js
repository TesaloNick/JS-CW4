// function hello (name) {
//     // console.log(name);
//     if (name === undefined || name === ''){     // if (!name) - альтернатива
//         return name = 'Hello, World!';
//     } else {
//     // console.log(name.slice(1, name.length));
//     const firstLetter = name[0].toUpperCase();
//     const newName = name.slice(1, name.length);
//     return `Hello, ${firstLetter + newName.toLowerCase()}!`;
//     }
// }
// const result = hello()
// console.log(result, ' - result from function');


// function vestBuy(price, haggle){
//     let sale  = 0;
//     switch (haggle) {
//         case 'light':
//             sale = 0.2;
//             break;
//         case 'medium':
//             sale = 0.3;
//             break;
//         case 'heavy':
//             sale = 0.4;
//             break;
//         case 'walkandswear':
//             sale = 0.9;
//             break;
//         default:
//             return 'Run!'
//     }
//     // if (haggle === 'light') {
//     //     sale = 0.2
//     // }
//     // if (haggle === 'medium') {
//     //     sale = 0.3
//     // }
//     // if (haggle === 'heavy') {
//     //     sale = 0.4
//     // }
//     // if (haggle === 'walkandswear') {
//     //     sale = 0.9
//     // }
//     return Math.round(price*(1 - sale))
// }
// const result = vestBuy(10000, 'light')
// console.log(result + ' - vest buy');

// const arr=[4,6,3,1,4,6,1]
// function recursiveFunction(n) {
//     console.log(arr[n-1]);
//     if (n > 1){
//         recursiveFunction(n-1)
//     } else {
//         console.log('recursion is over');
//     }
// }
// recursiveFunction(arr.length)

const arr=[4,6,3,1,4,6,1];
function uniqueArray(arr) {
    const newArr = [];
    for (let i=0; i < arr.length; i++){
        if (newArr.includes(arr[i])){
            continue;
        } else {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}
uniqueArray(arr)
