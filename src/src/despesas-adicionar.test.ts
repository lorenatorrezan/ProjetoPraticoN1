import { describe, it, expect } from "vitest";
import { adicionarDespesa } from "./despesas";

describe("adicionarDespesa", () => {
  const mercado = { id: 1, descricao: "Mercado", valor: 10, categoria: "alimentacao" as const, mes: 1 };
  const cinema = { id: 2, descricao: "Cinema", valor: 40, categoria: "lazer" as const, mes: 2 };

  it("retorna um novo array com a despesa adicionada no final", () => {
    expect(adicionarDespesa([mercado], cinema)).toEqual([mercado, cinema]);
  });

  it("não altera o array original", () => {
    // A função devolve um array novo em vez de usar push, para não mexer na lista de quem a chamou.
    const original = [mercado];

    adicionarDespesa(original, cinema);

    expect(original).toEqual([mercado]);
    expect(original).toHaveLength(1);
  });

  it("lança erro se o valor for zero ou negativo", () => {
    expect(() => adicionarDespesa([], { ...cinema, valor: 0 })).toThrow("valor deve ser maior que zero");
    expect(() => adicionarDespesa([], { ...cinema, valor: -5 })).toThrow("valor deve ser maior que zero");
  });

  it("lança erro se o mês não estiver entre 1 e 12", () => {
    expect(() => adicionarDespesa([], { ...cinema, mes: 0 })).toThrow("mês deve estar entre 1 e 12");
    expect(() => adicionarDespesa([], { ...cinema, mes: 13 })).toThrow("mês deve estar entre 1 e 12");
  });

  it("aceita os meses limite 1 e 12", () => {
    expect(adicionarDespesa([], { ...cinema, mes: 1 })).toHaveLength(1);
    expect(adicionarDespesa([], { ...cinema, mes: 12 })).toHaveLength(1);
  });
});