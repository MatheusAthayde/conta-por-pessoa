
function porcentagem(valor, porcentagem) {
    let por  = (valor/100) * porcentagem
    let res = valor + por
    return res

}

function divisor(din, pessoas) {
    let res = din / pessoas
    return res
}

function main() {

    
    let val = document.getElementById("bill")
    let va = val.value

    let qua = document.querySelector("#serviceQual")
    let qu = qua.value

    let people = document.querySelector("#people")
    let peo = people.value

    let res = document.getElementById("resultado")
    
    let valor = Number(va)
    let qualidade = Number(qu)
    let pessoas = Number(peo)
    
     let porcen = porcentagem(valor, qualidade)
    let resultado = divisor(porcen, pessoas)
    
    res.innerText = `${resultado}`
}