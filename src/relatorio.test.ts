import { describe, it, expect } from "vitest";
import { descricaoCategoria } from "./relatorio";
import { CATEGORIAS } from "./tipos";

describe("descricaoCategoria", () => {
  it("retorna o nome de exibição de cada categoria", () => {
    expect(descricaoCategoria("alimentacao")).toBe("Alimentação");
    expect(descricaoCategoria("transporte")).toBe("Transporte");
    expect(descricaoCategoria("lazer")).toBe("Lazer");
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });

  it("cobre todas as categorias na ordem de CATEGORIAS", () => {
    expect(CATEGORIAS.map(descricaoCategoria)).toEqual([
      "Alimentação",
      "Transporte",
      "Lazer",
      "Moradia",
    ]);
  });
});