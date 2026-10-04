import { describe, it, expect } from "vitest";
import { formatarRelatorio } from "./relatorio";

describe("formatarRelatorio", () => {
  const despesas = [
    { id: 1, descricao: "Mercado", valor: 100, categoria: "alimentacao" as const, mes: 1 },
    { id: 2, descricao: "Padaria", valor: 25.5, categoria: "alimentacao" as const, mes: 2 },
    { id: 3, descricao: "Ônibus", valor: 60, categoria: "transporte" as const, mes: 1 },
    { id: 4, descricao: "Aluguel", valor: 900, categoria: "moradia" as const, mes: 1 },
  ];

  // Linhas do relatório: 0 título, 1 traço, 2 a 5 categorias, 6 traço, 7 total geral, 8 maior despesa.
  const linhas = () => formatarRelatorio(despesas).split("\n");

  it("escreve o título em maiúsculas na primeira linha", () => {
    expect(linhas()[0]).toBe("RELATÓRIO DE GASTOS DO ANO");
  });

  it("tem uma linha por categoria com o total do ano", () => {
    expect(linhas()[2]).toContain("Alimentação");
    expect(linhas()[2]).toContain("125.50");
    expect(linhas()[3]).toContain("Transporte");
    expect(linhas()[3]).toContain("60.00");
    expect(linhas()[4]).toContain("Lazer");
    expect(linhas()[4]).toContain("0.00");
    expect(linhas()[5]).toContain("Moradia");
    expect(linhas()[5]).toContain("900.00");
  });

  it("alinha as colunas: as linhas de valores têm o mesmo tamanho", () => {
    const todas = linhas();
    const tamanho = todas[2].length;

    expect(todas[3]).toHaveLength(tamanho);
    expect(todas[4]).toHaveLength(tamanho);
    expect(todas[5]).toHaveLength(tamanho);
    expect(todas[7]).toHaveLength(tamanho);
  });

  it("mostra o total geral e a maior despesa no final", () => {
    expect(linhas()[7]).toContain("TOTAL GERAL");
    expect(linhas()[7]).toContain("1085.50");
    expect(linhas()[8]).toContain("Aluguel");
    expect(linhas()[8]).toContain("900.00");
  });

  it("funciona com lista vazia", () => {
    const relatorio = formatarRelatorio([]);

    expect(relatorio).toContain("TOTAL GERAL");
    expect(relatorio).toContain("0.00");
    expect(relatorio).toContain("Maior despesa: nenhuma");
  });
});