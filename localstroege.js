let pneus = JSON.parse(localStorage.getItem("pneus")) || [
  {
    titulo: "Pneu 175/70 R14",
    qualidade: "media",
    tipo: "carro",
    uso: "Pode ser reutilizado em veículo",
    preco: "R$ 80,00",
    vendedor: "Borracharia Central",
    contato: "(89) 99999-0001",
    imagem: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
  }
];

function salvarBanco() {
  localStorage.setItem("pneus", JSON.stringify(pneus));
}

function carregarPneus() {
  const lista = document.getElementById("listaPneus");
  lista.innerHTML = "";

  pneus.forEach((pneu) => {
    lista.innerHTML += `
      <div class="card" data-qualidade="${pneu.qualidade}" data-tipo="${pneu.tipo}">
        <img src="${pneu.imagem}" alt="Imagem do pneu">
        <h3>${pneu.titulo}</h3>
        <p class="${pneu.qualidade}">${pneu.qualidade === "media" ? "Qualidade média" : "Qualidade baixa"}</p>
        <p>Uso: ${pneu.uso}</p>
        <p>Preço: ${pneu.preco}</p>
        <p>Vendedor: ${pneu.vendedor}</p>
        <p>Contato: ${pneu.contato}</p>
      </div>
    `;
  });
}

function cadastrarPneu() {
  const vendedor = document.getElementById("vendedor").value;
  const contato = document.getElementById("contato").value;
  const local = document.getElementById("local").value;
  const medida = document.getElementById("medida").value;
  const qualidade = document.getElementById("qualidade").value;
  const tipo = document.getElementById("tipo").value;
  const preco = document.getElementById("preco").value;
  const descricao = document.getElementById("descricao").value;

  const novoPneu = {
    titulo: medida,
    qualidade: qualidade,
    tipo: tipo,
    uso: descricao,
    preco: preco,
    vendedor: vendedor,
    contato: contato,
    local: local,
    imagem: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
  };

  pneus.push(novoPneu);
  salvarBanco();
  carregarPneus();

  document.getElementById("formVenda").reset();

  alert("Pneu cadastrado com sucesso!");
}

function filtrar() {
  let qualidade = document.getElementById("filtroQualidade").value;
  let tipo = document.getElementById("filtroTipo").value;

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let qualidadeCard = card.getAttribute("data-qualidade");
    let tipoCard = card.getAttribute("data-tipo");

    let combinaQualidade = qualidade === "todos" || qualidade === qualidadeCard;
    let combinaTipo = tipo === "todos" || tipo === tipoCard;

    card.style.display = combinaQualidade && combinaTipo ? "block" : "none";
  });
}

carregarPneus();