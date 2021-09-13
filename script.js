let input1 = [];
let input2 = [];

function armazena(){
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    let valor1 = []
    let valor2 = []

    valor1.push(input1)
    valor2.push(input2)

    localStorage.setItem("valor1", JSON.stringify(valor1))
    localStorage.setItem("valor2", JSON.stringify(valor2))
    

}

function calcular(){
    
    const resultado = deocument.getElementById('resultado')


}

