# Controle de Gastos do Mês

Projeto individual de LP1 (aulas 1 a 6): módulo TypeScript que registra despesas e gera um relatório por categoria.

Autora: Lorena Torrezan

## Como instalar, testar e rodar

```
git clone https://github.com/lorenatorrezan/ProjetoPraticoN1.git
cd ProjetoPraticoN1
npm install
npm test
npm run dev
npx tsc --noEmit
```

- `npm install` baixa as dependências de desenvolvimento.
- `npm test` roda os testes uma vez (Vitest, sem modo watch).
- `npm run dev` roda o `src/index.ts` e imprime o relatório.
- `npx tsc --noEmit` confere os tipos sem gerar arquivos.

## Arquivos de configuração

- `package.json`: lista as dependências de desenvolvimento (typescript, @types/node, tsx, vitest), os scripts `test` e `dev` e `"type": "module"` para usar import/export.
- `package-lock.json`: trava as versões exatas instaladas, para que todo mundo instale as mesmas.
- `tsconfig.json`: configura o TypeScript; `strict: true` liga as checagens rigorosas, `noEmit` só verifica erros sem gerar `.js`, e `include: ["src"]` limita a checagem à pasta `src`.
- `.gitignore`: impede que `node_modules/` (gerada pelo `npm install`) e `dist/` (saída de compilação) vão para o Git.
- Config do Vitest: não existe arquivo próprio, o projeto usa o padrão do Vitest, que acha sozinho os arquivos `*.test.ts`.

## Estrutura

- `src/tipos.ts`: tipos `Categoria` e `Despesa` e o array `CATEGORIAS`.
- `src/despesas.ts`: `adicionarDespesa`, `removerDespesa`, `despesasDaCategoria`, `totalGasto`, `maiorDespesa`.
- `src/relatorio.ts`: `descricaoCategoria`, `matrizCategoriaMes`, `formatarRelatorio`.
- `src/index.ts`: monta despesas de exemplo e imprime o relatório.
- `src/*.test.ts`: testes com Vitest.

## Registro de uso de IA

Usei o Claude (Anthropic) durante  o projeto. A configuração do projeto foi feita por mim com orientação passo a passo da IA.

Vi os testes falharem e commitei antes das implementações. A única exceção é o teste de empate do `maiorDespesa`, que eu completei e corrigi. 

## Registro de uso da IA

Seguindo o modo IA: Par, eu escrevi os testes de cada função antes da implementação. Depois, utilizei a IA para gerar as implementações com base nos testes que criei.

Após receber as implementações, revisei o código gerado pela IA e verifiquei se os testes estavam passando e se o comportamento estava de acordo com o que havia definido. Todas as implementações foram aceitas sem alterações.
### Registro do processo

Seguindo o **Modo de IA: Par**, primeiro escrevi os testes para cada função, definindo os comportamentos esperados e os casos que deveriam ser validados. Depois, utilizei a IA para gerar as implementações com base nos testes criados.

Após receber as implementações, revisei o código gerado e verifiquei se ele atendia aos testes e ao comportamento esperado. As implementações foram aceitas como foram geradas pela IA, sem necessidade de ajustes.


## Reflexão

Usei a IA para gerar as implementações e todas passaram nos testes de primeira, então não precisei corrigir a lógica de nenhuma função. Os erros que tive foram mais de organização. Criei um arquivo de teste dentro de src/src, o Vitest não achou o módulo e eu tive que mover o arquivo para o lugar certo. Também errei a mensagem de um commit (estava escrito removerDespesa, mas o código era do adicionarDespesa) e consertei com git commit --amend. Pulei o commit do totalGasto, então a implementação dele acabou entrando junto com os testes do maiorDespesa. Por desconfiar da implementação do maiorDespesa, acrescentei um teste de empate para ver qual despesa ela devolve quando duas têm o mesmo valor. No começo escrevi o nome da variável errado (A em vez de a) e o teste falhou, mas depois de corrigir ele passou: em caso de empate a função devolve a primeira.