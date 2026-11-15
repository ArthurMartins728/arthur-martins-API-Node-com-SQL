# API REST de Usuários — Node.js, Express e MySQL

Projeto individual de API REST com operações de cadastro, consulta, atualização e exclusão de usuários. O acesso ao banco é feito com `mysql2`, sem ORM.

## 1. Requisitos

- Node.js instalado
- MySQL instalado e em execução
- VS Code (recomendado)

## 2. Instalação

Abra a pasta do projeto no VS Code e execute no terminal:

```bash
npm install
```

## 3. Configuração do banco

1. Abra o MySQL Workbench ou outro cliente MySQL.
2. Execute todo o conteúdo do arquivo `schema.sql`. Ele cria o banco `api_usuarios` e a tabela `usuarios`.
3. Faça uma cópia de `.env.example` e renomeie a cópia para `.env`.
4. Preencha usuário e senha do seu MySQL no arquivo `.env`. Não publique esse arquivo no GitHub.

Exemplo:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=api_usuarios
DB_PORT=3306
```

## 4. Executar a API

Modo normal:

```bash
npm start
```

Modo desenvolvimento (reinicia quando o código muda):

```bash
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

## 5. Rotas disponíveis

| Método | Rota | Função |
|---|---|---|
| POST | `/usuarios` | Cadastra um usuário |
| GET | `/usuarios` | Lista todos os usuários |
| PUT | `/usuarios/:id` | Atualiza o usuário do ID informado |
| DELETE | `/usuarios/:id` | Exclui o usuário do ID informado |

### Exemplos de requisição

**POST — `http://localhost:3000/usuarios`**

Envie no corpo (JSON):

```json
{
  "nome": "Ana Souza",
  "email": "ana@email.com",
  "idade": 20
}
```

**GET — `http://localhost:3000/usuarios`**

Não precisa de corpo. Retorna a lista de usuários.

**PUT — `http://localhost:3000/usuarios/1`**

Envie no corpo (JSON):

```json
{
  "nome": "Ana Souza",
  "email": "ana.novo@email.com",
  "idade": 21
}
```

**DELETE — `http://localhost:3000/usuarios/1`**

O ID é informado na URL. Remove o registro correspondente.

Use Postman, Insomnia ou a extensão Thunder Client do VS Code para testar as rotas.

## 6. Segurança e tratamento de erros

- As consultas que recebem dados usam `?` e valores separados em arrays, por meio de `db.execute()`. Isso evita concatenar diretamente os dados recebidos no SQL e ajuda a prevenir SQL Injection.
- As credenciais ficam no `.env`, que está listado no `.gitignore`.
- As rotas usam `try/catch` para tratar falhas.
- A API valida os campos principais e retorna códigos HTTP adequados: `200` (sucesso), `201` (criado), `400` (dados inválidos), `404` (registro/rota não encontrado), `409` (email duplicado) e `500` (erro interno).

## 7. Publicar no GitHub

Crie um repositório público com o padrão de nome solicitado pelo professor. Depois, no terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Projeto API REST com Node.js e MySQL"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Troque a URL de exemplo pela URL do seu repositório. Confira se `.env` e `node_modules` não foram enviados.

## 8. Estrutura do projeto

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
