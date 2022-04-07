const inputNum = document.getElementById("inputIdade");
const inputNum2 = document.getElementById("inputIdade2");
const inputValor = document.getElementById("inputValor");
const btCalcular = document.getElementById("btCalcular");

function calcular() {
  const Num = parseInt(inputNum.value.trim());
  //const Num2 = parseInt(inputNum2.value.trim());


  if (Num > 100) {
      const cem = cem + 1;
      resto = Num - 100;
      Calc = 'notas 100 =' + cem;
  }else{
      return;
  }
  
  if (resto > 50) {
      const ciq = ciq + 1;
      resto2 = resto - 50;
      Calc = 'notas 50 =' + ciq;
      
  }
  
  inputValor.innerHTML += `<li>${Calc}</li>`;
}

btCalcular.onclick = calcular;