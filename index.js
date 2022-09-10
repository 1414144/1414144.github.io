const txtop1 = document.getElementById("op1")
const txtoPerador = document.getElementById("operador")
const txtop2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

function calcular()
{
    const operador = txtoPerador.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    if((operador == "+" || operador == "-" ||operador == "*" ||operador == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operador){
         case "+":
           resultado = op1 + op2
           break
         case "-":
            resultado = op1 - op2
            break
         case "*":
            resultado = op1 * op2
            break
         case "/":
            resultado = op1 / op2
            break
        }
    pResultado.innerText = "=" + resultado
    pResultado.style = "color:blue"
    }
    else{
        pResultado.innerText = "calculo imposible"
        pResultado.style = "color:red"
    }
}