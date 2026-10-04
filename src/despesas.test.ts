import { describe, it, expect } from "vitest";
import { totalGasto, maiorDespesa } from "./despesas";

describe("totalGasto", () => {
  it("soma os valores de várias despesas", () => {
    const despesas = [
      { id: 1, descricao: "Mercado", valor: 10, categoria: "alimentacao" as const, mes: 1 },
      { id: 2, descricao: "Ônibus", valor: 20.5, categoria: "transporte" as const, mes: 1 },
    ];

    expect(totalGasto(despesas)).toBe(30.5);
  });

  it("retorna 0 para lista vazia", () => {
    expect(totalGasto([])).toBe(0);
  });
});

describe("maiorDespesa", () => {
  it("retorna a despesa de maior valor", () => {
    const mercado = { id: 1, descricao: "Mercado", valor: 10, categoria: "alimentacao" as const, mes: 1 };
    const aluguel = { id: 2, descricao: "Aluguel", valor: 900, categoria: "moradia" as const, mes: 1 };
    const cinema = { id: 3, descricao: "Cinema", valor: 40, categoria: "lazer" as const, mes: 2 };

    expect(maiorDespesa([mercado, aluguel, cinema])).toEqual(aluguel);
  });

  it("retorna undefined para lista vazia", () => {
    expect(maiorDespesa([])).toBeUndefined();
  });
});