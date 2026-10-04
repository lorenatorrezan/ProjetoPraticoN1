import { describe, it, expect } from "vitest";
import { totalGasto } from "./despesas";

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