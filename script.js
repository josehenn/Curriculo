document.getElementById("btn-saudacao").addEventListener("click", function () {
   const nome = prompt("Qual é seu nome?");
   const mensagem = document.getElementById("mensagem-saudacao");

   if (nome) {
      mensagem.innerText = `Seja bem vindo, ${nome}!`;
      mensagem.classList.remove("oculto");
   }
});

const coresPrimarias = [
   { principal: "#b4fc0e", hover: "#d7ffaa" },
   { principal: "#7db8ff", hover: "#a9d0ff" },
   { principal: "#ffb86b", hover: "#ffd9ad" },
   { principal: "#ff79c6", hover: "#ffb3e6" },
   { principal: "#bd93f9", hover: "#dcc6ff" },
];

let indiceCorPrimaria = 0;

document.getElementById("btn-cor").addEventListener("click", function () {
   indiceCorPrimaria = (indiceCorPrimaria + 1) % coresPrimarias.length;
   const cor = coresPrimarias[indiceCorPrimaria];

   document.documentElement.style.setProperty("--cor-destaque", cor.principal);
   document.documentElement.style.setProperty("--cor-destaque-hover", cor.hover);
});
