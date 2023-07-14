function mostrarMeuNome() {
    console.log('Geraldo');
    console.log('Lima');
}

console.log('fora da função');
 
function conteudoLivro(){
    console.log('Titanic');
}

mostrarMeuNome();
mostrarMeuNome();
conteudoLivro();

// função para somar a receita mensal

function somaEntradas(frete, escolar, turismo){
    const receita = frete + escolar+ turismo;
    return receita;    
}


// Essa função pega o resultado da função somaEntradas e subtrai
//com a função despesasFixas 

function despesasFixas(combustivel, imposto, manutencao, receita){
    const lucro = receita - (combustivel + imposto + manutencao);
    return lucro;  
}

function utilizandoAsDuasFuncoes(){
    var faturamento = somaEntradas(800.00, 8000.00, 500.00);
    console.log(faturamento);
var lucro = despesasFixas(1000.00, 700.00, 300.00, faturamento);
    console.log(lucro);
}
utilizandoAsDuasFuncoes();

/*var faturamento = somaEntradas(800.00, 8000.00, 500.00);
    console.log(faturamento);
var lucro = despesasFixas(1000.00, 700.00, 300.00, faturamento);
    console.log(lucro);
*/


console.log(somaEntradas (1, 2, 3))

function corFavorita(cor){
    if(cor==='azul') {
        return ' Voce gosta do ceu';
    }
    else if(cor==='verde') {
        return 'Voce gosta de mato';
    }
    else {
        return 'Voce não gosta de nada';
    }
}
var qualCor = corFavorita('azul');
console.log(qualCor);

addEventListener('click', function(){ 
    console.log('funcão anonima Você clicou');
});

function mostraConsole() {
    console.log('função normal oi');
}
addEventListener('click', mostraConsole );

function imc2(peso, altura) {

    const imc = peso / (altura ** 2);
    console.log('rodou')
    return imc;
       
}
 imc2(87, 1.80);

var resultadoImc2 = imc2(87, 1.80);
console.log(resultadoImc2);

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!' ;
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}
terceiraIdade();
console.log(terceiraIdade(59));


// usando template string

function faltaVisitar(paisesVisitados) {

    var totalPaises = 193;
    return ` Falta visitar ${totalPaises - paisesVisitados} países`;

}

console.log(faltaVisitar(93));



var profissao = 'Design';

function dados() {
    var nome = ' Geraldo';
    var idade = 57;
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        var idade = '58';
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }

    return outrosDados();

}

console.log(dados());
//outrosDados();

// Crie uma função para verificar se um valor é Truthy
/*
function eVerdadeiro (valor){
    var armazenaBooleano = !!valor;
    
    if (armazenaBooleano == true){
        return true;
    } else{
        return'esse valor não é verdade';
    }
}
console.log(eVerdadeiro(0));
*/

function parimpar (n) {
    if(n%2 == 0){
        return 'true !'
    } else {
        return 'false!'
    }

}
console.log(parimpar(4));

// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado){
   return lado + lado + lado + lado
}
console.log(perimetro(1.20));

// lembrando: perímetro é a soma dos quatro lados do quadrado



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return nome + sobrenome
}
console.log (nomeCompleto('Geraldo ', 'Lima'));


// Crie uma função que verifica se um número é par
function parImpar(n){
    if(n % 2 == 0){
        return 'É par !'
    } else{ 
        return 'É impar!'
    }
}
console.log(parImpar(4));



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(x){
    return typeof x;
}
console.log(tipoDeDado('simples'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
    console.log('Geraldo lima');
})


// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
  
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  var totalPaises = 193;
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  

  
  
