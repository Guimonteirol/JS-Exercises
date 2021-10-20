function mudar1(){
    document.body.style.background = 'red' //muda fundo
    //document.getElementById('btnred').style.backgroundColor = 'red' //muda elemento
}

function mudar2(){
    document.body.style.background = 'green'
}

function mudar3(){
    document.body.style.background = 'blue'
}

function mudar4(){
    document.body.style.background = 'yellow'
}

function voltar(){
    document.body.style.background = 'black'
}

function imc(){
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);

    if(!peso){
        return `Digite o peso!`;
    }
    if(!altura){
        return `Digite a altura!`;
    }
    
    else{
    let imc =  calcularimc(peso, altura);
    
    let resp = `O seu imc é: ${imc}`;
    return resp;
    }

}

function calcularimc(peso, altura){

    let imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function resposta(){
    document.getElementById('resp').innerHTML = imc();
    limparCampo();
}

function limparCampo(){
    document.getElementById('peso').innerHTML = "";
    document.getElementById('altura').innerHTML = "";
}


function respostadata(){
    let nasc = parseInt(document.getElementById('dat').value);
    let dataA = new Date();
    let idade = dataA.getFullYear() - nasc;
    console.log(nasc)
    console.log(dataA)
 
    document.getElementById('respdata').innerHTML = `Sua idade: ${idade} anos`
}