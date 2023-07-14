/*
var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('Possui graduação');
} else if(possuiDoutorado)  {
    console.log('Possui doutorado');
} else {
    console.log('Não possui nada');
}

var nome = 'Geraldo';

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
     console.log('Verdadeiro', condicional);
} else {
  console.log('Falso'); 
}

// condicional ou || retorna o primeiro verdadeiro

var condional2 = (5 - 5) || (5+ 5) || (10 - 2);
console.log(condional2);

var corFavorita = 'Verde';

switch (corFavorita) {

    case 'Azul':
       
        console.log('Olhe para o céu');
        break;

    case 'Amarelo':
        console.log('Olhe para o sol');
        break;

    case 'Verde':
        console.log('Olhe para a florasta');
        break;

    default:
        console.log('feche os olhos.');
}
   */     

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 58;
var parenteIdade = 57;

if (minhaIdade > parenteIdade) {
    console.log('É maior');
} else  if( parenteIdade == minhaIdade) { 
    console.log('É igual');
} else {
    console.log('é menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//true
var idade = 28;//true
var possuiDoutorado = false;//false
var empregoFuturo;//false
var dinheiroNaConta = 0;//false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil é maior');
}
else{ console.log('china é maior!');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}// verdadeiro

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}