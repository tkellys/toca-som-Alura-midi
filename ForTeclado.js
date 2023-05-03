// OTIMIZANDO com a Função for e estilizando com aas teclas DO MEU TECLADO  
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    // elemento sem nada apos considera que ele nao é nulo
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento ou seletor inválido')
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');


//Ao inves de while vamos utilizar o For
//ele age parecido porem nao vamos precisar declarar variaveis "contador" fora.
for(let contador = 0; contador < listaDeTeclas.length; contador++){
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

        // eventos do teclado e como usá-los:
   //crianção funcionalidades em teclas do teclado.
   tecla.onkeydown = function(evento){
   
//definindo a tecla q vou usar pra ativar
    if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
   }  
   tecla.onkeyup = function(){
    tecla.classList.remove('ativa')
   }
}
