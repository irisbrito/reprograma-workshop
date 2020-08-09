var inputValorHora = document.querySelector("#valor-hora");

var inputHorasProjeto = document.querySelector("#horas-projeto");

var resultado = document.querySelector("span");



function calcular(){
    var valorHora = inputValorHora.valueAsNumber;
    //console.log(valorHora);

    var horasProjeto = inputHorasProjeto.valueAsNumber;
    //console.log(horasProjeto);

    var valorFinal = valorHora * horasProjeto;
    //console.log(valorFinal);  

    var valorDuasCasas = valorFinal.toFixed(2) //vai ter duas casas decimais 
    console.log(valorDuasCasas);

    resultado.textContent = "O valor total do projeto é R$" + valorDuasCasas;


}

//lembrar de renomear o desafio.html
// var soma = salario + horas;
//console.log(soma);

