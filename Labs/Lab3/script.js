const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const campo1 = document.getElementById("num1");
  const campo2 = document.getElementById("num2");
  const campo3 = document.getElementById("num3");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "" || campo3.value === "") {
    resultado.textContent = "Preencha os três números.";
    return;
  }

  const num1 = Number(campo1.value);
  const num2 = Number(campo2.value);
  const num3 = Number(campo1.value);
  const soma = num1 + num2 + num3;
  const subtracao = num1 - num2 - num3;
  const multiplicacao = num1 * num2 * num3;
  const divisao = num2 === 0
    ? "Não é possível dividir por zero."
    : num1 / num2 / num3;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});