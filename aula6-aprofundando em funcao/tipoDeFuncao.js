
//tipo de função "declarativas"
function funcao(){
    console.log('Sou uma mensagem de função declarativa');
}

funcao();

//tipo de função "com nomeação"
var funcao2 = function(){
    console.log('Sou uma mensagem de função de expressão')
}
funcao2();

//tipo de função "arrow function" ou "setas"
var funcao3 = () => {
    console.log('Sou uma arrow function');
}
funcao3();