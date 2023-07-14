var nome= 'Geraldo';
nome.length;
nome.charAt(2);
console.log(nome .charAt(0));


var nomemaiusculo = nome.toUpperCase();
console.log(nomemaiusculo);

var altura = 1.8;
altura=altura.toString();
console.log(altura);


// nomeie 3 propriedades ou métodos de strings

var aluno = 'Geraldo';
aluno.length;
aluno.padEnd();
aluno.trim();

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn');
//btn.addEventListener
//btn.appendChild
//btn.animate
//btn.innerHTML
//console,log(btn);


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


btn.addEventListener('click', ()=> {
    console.log('clicou');

    var meuTexto = document.querySelector('.foda')
    console.log(meuTexto.innerHTML);
    var colocando = document.querySelector('.fodaEntraAqui')
    console.log(colocando)
    colocando.innerHTML = meuTexto.innerHTML;
});

