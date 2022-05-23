/* 
* HACK-1 
     vaciar el array
     [100,200,300,400,500,600,700]  result >  []
*/

const array = [100,200,300,400,500,600,700];

array.splice(0, array.length);

console.log(array);