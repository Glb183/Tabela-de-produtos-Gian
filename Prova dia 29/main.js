const produtos = [
    {
      nome: "Violão",
      categoria: "Cordas",
      quantidade: 8,
      preco: 750.00
    },
    {
        nome: "Bateria",
      categoria: "Percussão",
      quantidade: 3,
      preco: 2800.00
    },
    {
        nome: "Teclado Musical",
      categoria: "Teclas",
      quantidade: 6,
      preco: 950.00
    },
    {
        nome: "Flauta",
      categoria: "Sopro",
      quantidade: 14,
      preco: 120.00
    },
    {
    
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }