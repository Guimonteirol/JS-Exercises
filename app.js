
let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let criaMoscaTempo = 1500

let nivel = window.location.search  //retorna apenas o parâmetro do link da pag
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
     criaMoscaTempo = 1500
}
else if(nivel === 'dificil'){
     criaMoscaTempo = 1000
}
else if(nivel === 'chucknorris'){
    criaMoscaTempo = 750
}


function ajustaTamanhoPalco(){ //FUNÇÃO PARA SABER A DIMENSÃO DA PAG e movimentar o jogo dentro dela

    altura = window.innerHeight  //essa função retorna a altura da pag
    largura = window.innerWidth

    console.log(largura, altura) //escrevdno as larguras e alturas

}

ajustaTamanhoPalco()


let cronometro = setInterval(function(){

    tempo -= 1
    document.getElementById('cronometro').innerHTML =  tempo

    if(tempo == 0){
        clearInterval(cronometro)
        clearInterval(criamosca)
        window.location.href = "vitoria.html"
    }
   
}, 1000)

function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    //SE ELE FOR REMOVIDO AUTOMATICAMENTE - PERDE UM PONTO 
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if(vidas>3){
            //alert('Interromper o jogo (game over)')
            window.location.href = 'fim_de_jogo.html' //redireciona para outra página 
        }
        else{
        document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png" //MODIFICANDO A ORIGEM DA IMAGEM
        
        vidas++
        }
    }

    let posX = Math.floor(Math.random() * largura) - 90  //VALORES ALEATÓRIOS DE 0 AOS VALORES VARIÁVEIS DE REDINCIONAMNTO
    let posY = Math.floor(Math.random() * altura) - 90   //relacionando 

    posX = posX < 0 ? 0 : posX  //AQUI É PARA CASO, UM VALOR SEJA NEGATIVO (OQ TIRARIA ELE DA TELA) IGUALE A A0, OQ LEVA A FIGURA PARA O TOPO ESQUERDO
    posY = posY < 0 ? 0 : posY

    console.log(posX,posY)

//criar o elemento html
//usando o DOM - criando elemento de forma dinâmica e inserindo no body da pag
    let mosca = document.createElement('img') //atribuindo a criação do elemento à variável
    mosca.src = 'imagens/mosca.png'
    mosca.className = TamanhoAleatorio() + ' ' + LadoAleatorio() //acessou a classe

    mosca.style.left = posX + 'px' //coordenada em pixels
    mosca.style.top = posY + 'px' 
    mosca.style.position = 'absolute' //para essas coordenadas serem aplicadas, o elemento tem q ser absoluto
    mosca.id = 'mosca'
   /* mosca.onclick = function(){
        alert('Elemento clicado a tempo')
    }*/
    mosca.onclick = function(){     // quando clica ele exclui o elemento 
        this.remove()   //o this faz referencia ao prorpio elemento html q executa a função
    }

    document.body.appendChild(mosca) //adicionou a imagem no html
   
}

function TamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)  //0 1 2 
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosca1' //não precisa do break pq o js já para quando encontra um return
        case 1:
            return 'mosca2' //representa a classe
        case 2:
            return 'mosca3'

    }
}

function LadoAleatorio(){
    let classe = Math.floor(Math.random() * 2) //0 1

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}