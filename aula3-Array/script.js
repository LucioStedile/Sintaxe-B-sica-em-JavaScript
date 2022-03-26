// como declarar array
let array = ['string', 1, true];
console.log(array);

//araay pode guardar vários arrays
let array2 = [[array],['array1'], ['array3'], ['array4']];
console.log(array2);

//forEach
array.forEach(
    function(item, index){
        console.log(index, item)
    });

//push adiciona item no final do array
array.push('novo item');
console.log(array);

//pop retira item do final do array
array.pop();
console.log(array);

//shift retira item do inicio do array
array.shift();
console.log(array);

//unshift adiciona item no inicio do array
array.unshift('string');
console.log(array);

//indexOf retorna o valor do índice
console.log(array.indexOf(true));

//splice remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

//slice adiciona item pelo índice
array[0] = 'Lúcio';
array[1] = 34;
array[2] = false;
array[3] = 'Aula';
array.slice(0, 3);
console.log(array);

//=====================================================================

//Objetos

let object = {string: 'string', Number: 52,Boolean: true, array5: [array],objectInterno:
 {objectInterno: 'objecto interno'} };
 console.log(object);
 console.log(object.Number);