import { describe, it, expect } from "vitest";
import { removerDespesa } from "./despesas";

describe("removerDespesa", () => {
  const mercado = { id: 1, descricao: "Mercado", valor: 10, categoria: "alimentacao" as const, mes: 1 };
  const cinema = { id: 2, descricao: "Cinema", valor: 40, categoria: "lazer" as const, mes: 2 };

  it("retorna um novo array sem a despesa com o id informado", () => {
    expect(removerDespesa([mercado, cinema], 1)).toEqual([cinema]);
  });

  it("retorna uma cópia igual quando o id não existe", () => {
    const original = [mercado, cinema];

    const resultado = removerDespesa(original, 99);

    expect(resultado).toEqual(original);
    expect(resultado).not.toBe(original);
  });

  it("não altera o array original", () => {
    const original = [mercado, cinema];

    removerDespesa(original, 1);

    expect(original).toEqual([mercado, cinema]);
  });
});