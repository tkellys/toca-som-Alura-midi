//----------- Como fazer um botão emitir o som BASICO;

function tocaSomPom(){
// 1° seleciona o botao
// document.querySelector('.tecla_pom');
}


//2°adiciona o som no botao 
//( .play significa acessar os metodo/ações do elemento <audio>)
document.querySelector('#som_tecla_pom').play();

// Podemos fazer a chamada dessa função direto pelo javascript para não precisar escrever no codigo inline a ação dessa função dentro do botao. Como ficaria? 

/*1° seleciona o botão e acessa os atributos do botao da mesma forma que fez com o play, aqui usamos o atributo onclick e atribuimos a função a este botao. DETALHE sem oparentese pois a chamada da função so ocorre no clique do botao. */
document.querySelector('.tecla_pom').onclick = tocaSomPom;



document.querySelectorAll('.tecla'); // vai me retornar uma lista/array com todos os botoes q tem o nome tecla

//const listaDeTeclas = document.querySelectorAll('.tecla');

//listaDeTeclas[0].onclick = tocaSomPom // atraves da constante vou acessar o botao pelo indice pq agr ele é uma lista e depois adicionar o onclick.
// ----------------------//--------------//-------------------------



// ------------- AGORA VAMOS CRIAR ESSA MESMA FUNÇÃO DE FORMA GENERICA QUE FUNCIONE PARA TODOS OS BOTOES------

function tocaSom(idBotaoSom){
    document.querySelector(idBotaoSom).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    // criar constantes para chamar cada id de forma dinamica
const tecla = listaDeTeclas[contador];
//classList vai acessar o nome da tecla que esta definido no meu html, o indice é pq essa tecla possui 2 claas, 0- tecla e 1- tecla_pom
const instrumento = tecla.classList[1]

const idAudio = `#som_${instrumento}`;
//console.log(idAudio).
     
    //Chamando a função com o clique do mouse direto pelo js sem precisar colocar no html

    // em seguida criei uma funcao anonima para dar a acao do botao, pois se colocasse so do lado do onclick a função seria executada na abertura do browser e nao apenas no clique do botao. 

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    //console.log(contador);.
}