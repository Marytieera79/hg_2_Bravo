/* 
* HACK-5 
     //clonar array
     [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700]
*/

const array1 = [100,200,300,400,500,600,700];

const array2 = array1.slice();

console.log(array1, array2); //compruebo que ambos array son el iguales

array1.splice(0, array1.length); //modifico el arrray original para verificar que el array2 no es alterado por estos cambios

console.log(array1, array2) //output -> [], [100,200,300,400,500,600,700]