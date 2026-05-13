function filtrar() {
  let qualidade = document.getElementById("filtroQualidade").value;
  let tipo = document.getElementById("filtroTipo").value;

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let q = card.getAttribute("data-qualidade");
    let t = card.getAttribute("data-tipo");

    let mostrarQualidade = qualidade === "todos" || qualidade === q;
    let mostrarTipo = tipo === "todos" || tipo === t;

    if (mostrarQualidade && mostrarTipo) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function filtrar() {
  let qualidade = document.getElementById("filtroQualidade").value;
  let tipo = document.getElementById("filtroTipo").value;

  let cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    let qualidadeCard = card.getAttribute("data-qualidade");
    let tipoCard = card.getAttribute("data-tipo");

    let combinaQualidade = qualidade === "todos" || qualidade === qualidadeCard;
    let combinaTipo = tipo === "todos" || tipo === tipoCard;

    if (combinaQualidade && combinaTipo) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}