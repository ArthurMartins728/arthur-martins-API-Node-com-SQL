# API REST de Usuários

**Projeto de Programação Web III**

Este projeto foi desenvolvido como trabalho prático da matéria de Programação Web III. A API permite cadastrar, consultar, atualizar e excluir usuários, utilizando Node.js e MySQL.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- mysql2
- dotenv
- cors

## Como instalar

Primeiro, abra a pasta do projeto no VS Code e execute no terminal:

```bash
npm install
```

## Configuração do banco de dados

1. Abra o MySQL Workbench.
2. Execute o código que está no arquivo `schema.sql`.
3. Crie uma cópia do arquivo `.env.example` e renomeie para `.env`.
4. Coloque os dados de acesso do seu banco MySQL no arquivo `.env`.

## Como iniciar o projeto

Para iniciar a API, utilize:

```bash
npm start
```

O servidor será iniciado no endereço:

`http://localhost:3000`

## Rotas da API

| Método | Rota | Função |
|---|---|---|
| POST | /usuarios | Cadastrar usuário |
| GET | /usuarios | Listar usuários |
| PUT | /usuarios/:id | Atualizar usuário |
| DELETE | /usuarios/:id | Excluir usuário |

## Testes

As rotas podem ser testadas utilizando o Postman, Insomnia ou Thunder Client.

## Estrutura do projeto

```text
api-node-mysql/
├── src/
│   ├── config/
│   ├── routes/
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── schema.sql
```

**Aluno:** Arthur Martins

**Disciplina:** Programação Web III
