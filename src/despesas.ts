import type { Categoria, Despesa } from "./tipos";

export function totalGasto(despesas: Despesa[]): number {
  return despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
  if (despesas.length === 0) {
    return undefined;
  }
  return despesas.reduce((maior, atual) =>
    atual.valor > maior.valor ? atual : maior,
  );
}

export function despesasDaCategoria(
  despesas: Despesa[],
  categoria: Categoria,
): Despesa[] {
  throw new Error("não implementado");
}