// Categorias possíveis. Union type porque o valor só pode ser um destes quatro;
// qualquer outro texto dá erro de compilação.
export type Categoria = "alimentacao" | "transporte" | "lazer" | "moradia";

export interface Despesa {
  // readonly porque o id identifica a despesa e nunca pode mudar depois de criado.
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: Categoria;
  mes: number; // de 1 a 12
  // Opcional (?) porque nem toda despesa precisa de uma observação.
  observacao?: string;
}

// Ordem usada nas linhas da matriz do relatório.
export const CATEGORIAS: Categoria[] = [
  "alimentacao",
  "transporte",
  "lazer",
  "moradia",
];