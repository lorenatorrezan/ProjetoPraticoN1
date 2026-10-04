import { describe, it, expect } from "vitest";
import { matrizCategoriaMes } from "./relatorio";

describe("matrizCategoriaMes", () => {
  it("tem uma linha por categoria e 12 colunas", () => {
    const matriz = matrizCategoriaMes([]);

    expect(matriz).toHaveLength(4);
    expect(matriz.every((linha) => linha.length === 12)).toBe(true);
  });

  it("soma os valores de cada categoria em cada mês", () => {
    const despesas = [
      { id: 1, descricao: "Mercado", valor: 10, categoria: "alimentacao" as const, mes: 1 },
      { id: 2, descricao: "Padaria", valor: 5, categoria: "alimentacao" as const, mes: 1 },
      { id: 3, descricao: "Ônibus", valor: 20, categoria: "transporte" as const, mes: 3 },
      { id: 4, descricao: "Aluguel", valor: 900, categoria: "moradia" as const, mes: 12 },
    ];

    const matriz = matrizCategoriaMes(despesas);

    expect(matriz[0][0]).toBe(15); // alimentação em janeiro: duas despesas somadas
    expect(matriz[1][2]).toBe(20); // transporte em março
    expect(matriz[3][11]).toBe(900); // moradia em dezembro
    expect(matriz[2][5]).toBe(0); // lazer em junho: sem despesas
  });

  it("devolve tudo zero quando não há despesas", () => {
    const linhaVazia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(matrizCategoriaMes([])).toEqual([linhaVazia, linhaVazia, linhaVazia, linhaVazia]);
  });
});