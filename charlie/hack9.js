/* 
* HACK-9
     //agregar tú alias al inicio
     [100,200,300,400,500,600,700]  result >  [foo,100,200,300,400,500,600,700]
*/

const array1 = [100,200,300,400,500,600,700];

array1.unshift('alfa');

console.log(array1);