var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 != -1) {

    if (jogador1 > 0) {
        console.log('jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    }else if(jogador2 > 0){
        console.log('jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
    }else{
        console.log('Ninguem marcou ponto!');
        placar = 0;
    }
    
}else{
    console.log('Não existe este valor');
}

//=================================================================

//operador ternário

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos'): console.log('Jogadores inválidos');

//Switch

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
        default:
            console.log('ninguem ganhou');
}

//for
let exemplo = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
for(let indice = 0; indice < exemplo.length; indice++){
    console.log(indice);
}
//for in
for(let i in exemplo){
    console.log(exemplo[i]);
}
//for of
let exemplo2 = {prop1:'valor1',prop2: 'valor2',prop3: 'valor3',prop4: 'valor4',prop5: 'valor5'};
for(i of exemplo2.prop1){
    console.log(i);
};
//while
var a = 0;
while(a < 10){
    a++;
    console.log(a);
}
//Do While
do{
    a--;
    console.log(a);
}while(a > 0);
