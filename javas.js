console.log ("Hello locas")

const h1 = document.querySelector("h1")
const input1= document.querySelector("#calculo1")
const input2= document.querySelector("#calculo2")
const btn= document.querySelector("#btnCalcular")
const Rresult= document.querySelector("#resultado")

btn.addEventListener("click",btnOnclick)

function btnOnclick(){
    let input1Value = parseInt(input1.value);
    let input2Value = parseFloat(input2.value);
    let resultado= input1Value + input2Value

    Rresult.innerText= resultado
}
