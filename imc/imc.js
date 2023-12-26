const faixaPeso = [
    {limite: 18.50, class: 'Under weight'},
    {limite: 24.90, class: 'Normal weight'},
    {limite: 29.90, class: 'Overweight'},
    {limite: 34.90, class: 'Obesity 1'},
    {limite: 39.90, class: 'Obesity 2'},
    {limite: Infinity, class: 'Obesity 3'}
]
function calculateIMC(weight, height) {

    const realHeight = height * height;
    const imc =  (weight/realHeight).toFixed(2);

    for(let faixa of faixaPeso) {

        if(imc <= faixa.limite) {
            return [imc,faixa.class];
        }
    }
}

const botao = document.getElementById("button-calculator");

botao.onclick = function() {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const nome = document.getElementById("name").value;

    if(height == '' || weight == '' || nome == "") {
        document.getElementById('box').innerHTML = "Fill in all the fields!";
    }

    const imc = calculateIMC(weight, height);

    if(imc) {
        document.getElementById('box').innerHTML = `${nome} your BMI is ${imc[0]} and you in ${imc[1]}`;
    }
}