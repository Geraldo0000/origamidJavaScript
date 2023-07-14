var pessoa = {
    nome: 'Geraldo',
    idade: 57,
    profissao: 'Designer',
    possuiFaculdade: true,
}
console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },

}
console.log(quadrado.perimetro(45));

var quadrado2= {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },

}
console.log(quadrado2.perimetro(4));

console.log(Math.sin(15));

console.table(quadrado2);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',

}

menu.backgroundColor = '#000';

menu.color = 'blue';
var bg = menu.backgroundColor;



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome


var dadosPessoais = {
    nome: 'Geraldo',
    sobreNome: 'Lima',
    idade: 57,
    nomeCompleto() {
        return this.nome +' '+ this.sobreNome;

    }

}


// Crie um método no objeto anterior, que mostre o seu nome completo

console.log(dadosPessoais.nomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cachorro = {
    raca: 'Labrador',
    cor: ' Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'Latir'
        } else{
            return 'nada';
        }
    }

  }
 

  
  
  
