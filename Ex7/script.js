const inputNum = document.getElementById("inputIdade");
const inputNum2 = document.getElementById("inputIdade2");
const inputAnoNasc = document.getElementById("inputAnoNasc");
const btCalcular = document.getElementById("btCalcular");

function calcular() {
  const Num = parseInt(inputNum.value.trim());
  const Num2 = parseInt(inputNum2.value.trim());

  const Calc = Num + Num2;
  inputAnoNasc.innerHTML += `<li>${Calc}</li>`;

  const Calc2 = Num - Num2;
  inputAnoNasc.innerHTML += `<li>${Calc2}</li>`;

  const Calc3 = Num * Num2;
  inputAnoNasc.innerHTML += `<li>${Calc3}</li>`;

  const Calc4 = Num / Num2;
  inputAnoNasc.innerHTML += `<li>${Calc4}</li>`;

  const Calc5 = Num ** Num2;
  inputAnoNasc.innerHTML += `<li>${Calc5}</li>`;
}

btCalcular.onclick = calcular;