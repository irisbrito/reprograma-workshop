console.log("Hello world!")

var inputSalario = document.querySelector("#ganho-mes");
//console.log(inputSalario);
var inputHoras = document.querySelector("#horas-dia");
//console.log(inputHoras);

var resultado = document.querySelector("span");

function calcularValorHora(){
    var salario = inputSalario.valueAsNumber;
    //console.log(salario);
    var horas = inputHoras.valueAsNumber;
    //console.log(horas);

    var horasMes = horas * 22;

    var valorHora = salario / horasMes;
    console.log(valorHora);

    var valorDuasCasas = valorHora.toFixed(2) //vai ter duas casas decimais 
    console.log(valorDuasCasas);

    resultado.textContent = "R$ " + valorDuasCasas;



    //console.log(resultado);

    //var soma = salario + horas;
    //console.log(soma);

}