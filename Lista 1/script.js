
alert("Olá Mundo");

function msg(){
    alert("Bom trabalho");
}
//QUESTÃO 2
function msg2(){
    let resp = document.getElementById("nome").value;
    alert(resp);
}
//QUESTÃO 3
function operacoes(){
    let n1 = parseInt(document.getElementById("v1").value);
    let n2 = parseInt(document.getElementById("v2").value);
   
    let soma = n1 + n2;
    let div = n2/n1;
    let sub = n1 - n2;
    let mul = n1 * n2;

    let resp = "Soma = "+ soma + " Subtração = " + sub + " Divisão = " + div + " Multiplcação = " + mul;
    return resp;
}

function msg3(){
    document.getElementById("respq3").innerHTML = "" + operacoes();
}

//QUESTÃO 4
function msg4(){
   let v1 = document.getElementById("v1q4");
   let v2 = document.getElementById("v2q4");

    let valor1 = Number(v1.value);
    let valor2 = Number(v2.value);

    let result = (valor1 + valor2)/2;
    
    document.getElementById("respq4").innerHTML = result;
}

//QUESTÃO 5
    function msg5(){
        let x = Number(document.getElementById('q5').value);
        let quadrado = x*x;
        document.getElementById('respq5').innerHTML = `O quadrado de ${x} é ${quadrado}`;
    }


//QUESTÃO 6  **CRIAR VETOR de 5
    let maior = -999 ;
    function msg6(){

        let y = Number(document.getElementById('q6').value);
        if(y > maior){
            maior = y;
        }
        document.getElementById('respq6').innerHTML = `O maior elemento é: ${maior}`;
    }


//QUESTÃO 7

    function msg7(){
        var img = document.getElementById('imgm');
        img.setAttribute('src', 'outono4.jpg');
        //document.getElementeById('imgm').src = " imag.jpg";
    }

    function msg77(){
        let img = document.getElementById('imgm');
        img.setAttribute('src', 'primavera3.jpg');
    }

//QUESTÃO 8

    function msg8(){
        let X = document.getElementById("q8").value;
        if(X == "" ){
            document.getElementById('respmsg8').innerHTML = `Senha inválida`;
        }
        else
            document.getElementById('respmsg8').innerHTML = `Okay`;

    }


//QUESTÃO 9

    function msg9a(){
        document.body.style.background = 'blue';
    }

    function msg9ver(){
        document.body.style.background = 'green';
    }

    function msg9v(){
        document.body.style.background = 'red';
    }

    function msg9b(){
        document.body.style.background = 'white';
    }