const nomeInput = document.getElementById('nome');
const nota1Input = document.getElementById('nota1');
const nota2Input = document.getElementById('nota2');
const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');
 
const MEDIA_MINIMA = 7;
 
calcBtn.addEventListener('click', function () {
 
    const nome = nomeInput.value;
  const nota1 = parseFloat(nota1Input.value);
  const nota2 = parseFloat(nota2Input.value);
 
  const media = (nota1 + nota2) / 2;
 
  let situacao = "";
 
  let notaRecuperacao = null;
 
  if (media >= MEDIA_MINIMA) {
    situacao = "APROVADO";
  }
  else if (media >= 5 && media < MEDIA_MINIMA) {
 
    notaRecuperacao = parseFloat(prompt("Aluno em recuperação. Digite a nota da recuperação:"));
 
    if (notaRecuperacao < 5) {
      situacao = "REPROVADO";
    } else {
      situacao = "APROVADO";
    }
  }
  else {
    situacao = "REPROVADO";
  }
 
  document.getElementById('rNome').textContent = nome;
  document.getElementById('rNota1').textContent = nota1;
  document.getElementById('rNota2').textContent = nota2;
  document.getElementById('rMedia').textContent = media.toFixed(2);
  document.getElementById('rStatus').textContent = situacao;
 
  if (notaRecuperacao !== null) {
    document.getElementById('rRecup').textContent = notaRecuperacao;
  }
 
  result.style.display = "block";
 
  // -----Pra Mostrar o resultado no console-----
  console.log("Nome do aluno: " + nome);
  console.log("Nota 1: " + nota1);
  console.log("Nota 2: " + nota2);
  console.log("Média: " + media.toFixed(2));
  console.log("Nota de Recuperação: " + notaRecuperacao);
  console.log("Situação do Aluno: " + situacao);
});
 
