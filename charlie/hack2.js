/* 
* HACK-2
     //eliminar el primer item
     [100,200,300,400,500,600,700]  result >  [200,300,400,500,600,700] 
*/

const array = [100,200,300,400,500,600,700];

array.splice(0, 1);

console.log(array);