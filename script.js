document.getElementById("btn-saudacao").addEventListener("click", function () {
   const nome = prompt("Qual é seu nome?");
   const mensagem = document.getElementById("mensagem-saudacao");

   if (nome) {
      mensagem.innerText = `Seja bem vindo, ${nome}!`;
      mensagem.classList.remove("oculto");
   }
});
