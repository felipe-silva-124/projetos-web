var somar = document.querySelector("button")
var num1 = document.getElementById("n1")
var num2 = document.getElementById("n2")

somar.onclick = () => {
    resposta()
}

function resposta() {
    var num3 = Number(num1.value) + Number(num2.value)
    document.querySelector("p").innerHTML = num3
}