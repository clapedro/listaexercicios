function PositivoNegativo(){


    let numero = document.querySelector("#numero").value;

    if(numero > 0){

        document.querySelector("#resposta").innerHTML = "Positivo " + numero;

    }else{
        document.querySelector("#resposta").innerHTML = "Negativo " + numero;


    }


}