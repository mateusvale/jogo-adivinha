//primeiro precisamos criar um valor randomico:
var valorASerObtido = Math.round(Math.random() * 10);
console.log(valorASerObtido);

var tentativas = 3;

//criar o input para colocar o valor:
var valorColocado = document.querySelector("input");

//O mouse sempre estara focado nele:
valorColocado.focus()

var label = document.querySelector("label");

var botao = document.querySelector("button");

//quando apertar o botao, ele fara uma acao:
botao.onclick = verifica;

//var imagem = document.querySelector(".genio");

function verifica(){

    if (tentativas == 0){
        return;
    }

    if (valorColocado.value == valorASerObtido){
        label.textContent = "Acertou";
        
        document.getElementById("genio").src = "imageGanhador.jpeg";
        return;

    }else{
        tentativas --;
        label.textContent = "Numero de tentativas: " + tentativas;
        if (tentativas == 0){
            label.textContent = "Perdeu";
            document.getElementById("genio").src = "image.jpeg";
        }
        valorColocado.value = "";
        valorColocado.focus();
        cor();
    }

}

function cor(){
    if (tentativas == 2){
        label.classList.add ("segundaTentativa");
    }
    if (tentativas == 1){
        label.classList.add ("terceiraTentativa");
    }
}






