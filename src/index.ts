import type { Despesa } from "./tipos";
import { adicionarDespesa, removerDespesa } from "./despesas";
import { formatarRelatorio } from "./relatorio";

const despesasIniciais: Despesa[] = [
  { id: 1, descricao: "Mercado", valor: 450.9, categoria: "alimentacao", mes: 1 },
  { id: 2, descricao: "Padaria", valor: 32.5, categoria: "alimentacao", mes: 2 },
  { id: 3, descricao: "Combustível", valor: 220, categoria: "transporte", mes: 1 },
  { id: 4, descricao: "Ônibus", valor: 85.4, categoria: "transporte", mes: 3 },
  { id: 5, descricao: "Cinema", valor: 60, categoria: "lazer", mes: 2, observacao: "Sessão de sábado" },
  { id: 6, descricao: "Show", valor: 180, categoria: "lazer", mes: 3 },
  { id: 7, descricao: "Aluguel", valor: 1200, categoria: "moradia", mes: 1 },
  { id: 8, descricao: "Aluguel", valor: 1200, categoria: "moradia", mes: 2 },
  { id: 9, descricao: "Aluguel", valor: 1200, categoria: "moradia", mes: 3 },
];

// Adiciona uma despesa nova: devolve uma lista nova, a original não muda.
const comNova = adicionarDespesa(despesasIniciais, {
  id: 10,
  descricao: "Restaurante",
  valor: 95,
  categoria: "alimentacao",
  mes: 3,
});

// Remove a despesa de id 4: também devolve uma lista nova.
const despesas = removerDespesa(comNova, 4);

console.log(formatarRelatorio(despesas));