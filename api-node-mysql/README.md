# API de Cadastro de Usuários

Aluno: Arthur Martins  
Disciplina: Programação Web III

Este projeto foi desenvolvido para a atividade de Programação Web III. A API permite cadastrar usuários, visualizar os registros, alterar informações e excluir usuários utilizando Node.js e MySQL.

## O que foi utilizado

- Node.js
- Express
- MySQL
- mysql2
- dotenv
- cors

## Como executar

Primeiro, abra a pasta do projeto no VS Code e instale as dependências:

```bash
npm install
```

## Configurando o banco de dados

Antes de iniciar a API, é necessário configurar o MySQL.

1. Abra o MySQL Workbench.
2. Execute o arquivo `schema.sql` para criar o banco e a tabela de usuários.
3. Copie o arquivo `.env.example` e renomeie a cópia para `.env`.
4. Informe os dados do seu banco MySQL nesse arquivo.

Exemplo de configuração:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=api_usuarios
DB_PORT=3306
```

## Iniciando o servidor

Para iniciar a aplicação:

```bash
npm start
```

Também é possível utilizar o modo de desenvolvimento:

```bash
npm run dev
```

Depois de iniciar, a API estará disponível em:

`http://localhost:3000`

## Rotas

A API possui quatro operações principais:

| Método | Endereço | Descrição |
|---|---|---|
| POST | `/usuarios` | Adiciona um usuário |
| GET | `/usuarios` | Mostra os usuários cadastrados |
| PUT | `/usuarios/:id` | Altera os dados de um usuário |
| DELETE | `/usuarios/:id` | Remove um usuário |

Para testar as operações, podem ser utilizados o Postman, Insomnia ou Thunder Client.

## Sobre o projeto

Os dados são armazenados em um banco MySQL. As operações são feitas utilizando consultas SQL pelo `mysql2`.

Também foram adicionadas verificações para os dados enviados, tratamento de erros e consultas parametrizadas.

As informações de acesso ao banco ficam no arquivo `.env`, que não deve ser enviado ao GitHub.

## Organização dos arquivos

```text
api-node-mysql/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   └── usuarios.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── schema.sql
```
