# Projeto Jest

[Objetivos do projeto](#objetivos-do-projeto) | [Tecnologias utilizadas](#tecnologias-utilizadas) | [Implementações](#implementações) | [Como rodar o projeto](#como-rodar-o-projeto)

---

### Objetivos do projeto

Nesse projeto foram desenvolvidos testes utilizando Jest, para funções assíncronas, com mock de funções e APIs.

---

### Tecnologias utilizadas

- `JavaScript`
- `Testes com Jest`

---

### Implementações

- Testes para funções assíncronas
- Mock de funções
- Mock para o retorno da API

---

### Como rodar o projeto

1. Clone o repositório
- `git clone git@github.com:tryber/sd-011-project-jest.git.`

2. Entre na pasta do repositório:
- `cd project-jest`

3. Instale as dependências
- `npm install`

4. Para rodar os testes
- `npm test nome-arquivo.test`

---

### Requisitos do projeto

1 - Cria testes para uma função assíncrona
- Completa os testes do arquivo test/asyncJest.spec.js para que funcionem com código assíncrono.

2 - Cria um "Mock" no arquivo test/mockFunctions.spec.js
- Cria mock functions no arquivo test/mockFunctions.spec.js para que os testes mockados 'sobrescrevam' o código definido na pasta src. A idéia é que as funções criadas a partir do Jest tenham prioridade na sua execução.

3 - Cria um Mock para o retorno da API
- Cria uma API mock no arquivo test/mockApi.spec.js para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

4 - Cria funções no arquivo test/setupTeardown.spec.js
- Intercala funções entre os testes definidos no arquivo test/setupTeardown.spec.js.
