/* 
* HACK-8 
     //agregar tú alias al final
     [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700,foo]
*/

const array1 = [100,200,300,400,500,600,700];

array1.push('alfa');

console.log(array1);