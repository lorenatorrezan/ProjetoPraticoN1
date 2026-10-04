import { CATEGORIAS } from "./tipos";
import type { Categoria, Despesa } from "./tipos";
import { despesasDaCategoria, maiorDespesa, totalGasto } from "./despesas";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentacao":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  // Monta a tabela vazia: uma linha por categoria, 12 colunas de zeros.
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let mes = 0; mes < 12; mes++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  // Passa por cada despesa e soma o valor na célula certa.
  for (let i = 0; i < despesas.length; i++) {
    const despesa = despesas[i];
    const linha = CATEGORIAS.indexOf(despesa.categoria);
    matriz[linha][despesa.mes - 1] += despesa.valor;
  }

  return matriz;
}

// Monta uma linha com o nome à esquerda (16 caracteres) e o valor à direita (10 caracteres).
function linhaDeValor(nome: string, valor: number): string {
  return nome.padEnd(16) + "R$ " + valor.toFixed(2).padStart(10);
}

export function formatarRelatorio(despesas: Despesa[]): string {
  const linhas: string[] = [];

  linhas.push("Relatório de gastos do ano".toUpperCase());
  linhas.push("-".repeat(29));

  for (const categoria of CATEGORIAS) {
    const total = totalGasto(despesasDaCategoria(despesas, categoria));
    linhas.push(linhaDeValor(descricaoCategoria(categoria), total));
  }

  linhas.push("-".repeat(29));
  linhas.push(linhaDeValor("TOTAL GERAL", totalGasto(despesas)));

  const maior = maiorDespesa(despesas);
  if (maior === undefined) {
    linhas.push("Maior despesa: nenhuma");
  } else {
    linhas.push(`Maior despesa: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})`);
  }

  return linhas.join("\n");
}