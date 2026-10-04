import { CATEGORIAS } from "./tipos";
import type { Categoria, Despesa } from "./tipos";

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

export function formatarRelatorio(despesas: Despesa[]): string {
  throw new Error("não implementado");
}