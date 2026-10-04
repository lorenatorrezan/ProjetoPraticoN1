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
  return despesas.filter((despesa) => despesa.categoria === categoria);
}

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error("valor deve ser maior que zero");
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("mês deve estar entre 1 e 12");
  }
  return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
  throw new Error("não implementado");
}