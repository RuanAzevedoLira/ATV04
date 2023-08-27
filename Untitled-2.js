// Vetor de produtos disponíveis para sorteio
let produtos = [10];

// Lista de participantes do sorteio
let participantes = [10];

// Função para gerar um número aleatório dentro do intervalo das posições dos produtos
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Loop para manter o menu em execução
while (true) {
  console.log("Menu:");
  console.log("1. Cadastrar Produto");
  console.log("2. Cadastrar Pessoas");
  console.log("3. Sortear");
  console.log("4. Sair");

  const opcao = parseInt(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      const novoProduto = prompt("Digite o nome do novo produto:");
      produtos.push(novoProduto);
      console.log("Produto cadastrado com sucesso!");
      break;

    case 2:
      const novaPessoa = prompt("Digite o nome da nova pessoa:");
      participantes.push(novaPessoa);
      console.log("Pessoa cadastrada com sucesso!");
      break;

    case 3:
      if (produtos.length === 0) {
        console.log("Não há produtos disponíveis para sorteio.");
        break;
      }

      const numeroSorteado = gerarNumeroAleatorio(0, produtos.length - 1);
      const produtoSorteado = produtos[numeroSorteado];
      const pessoaSorteada = participantes[gerarNumeroAleatorio(0, participantes.length - 1)];

      console.log(`Parabéns, ${pessoaSorteada}! Você ganhou o produto: ${produtoSorteado}`);
      break;

    case 4:
      console.log("Saindo do programa.");
      process.exit();

    default:
      console.log("Opção inválida. Escolha novamente.");
  }
}