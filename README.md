# Aplicação Lista de Recados

Esta é uma API simples de Lista de Recados, que permite criar usuários, fazer login e gerenciar (criar, ler, atualizar e excluir) recados. A aplicação foi desenvolvida utilizando Node.js com Express e está hospedada no Render.

## Endpoints da API

### Base URL

`https://avalia-o-final-do-m-dulo-introdu-o-ao-8n2c.onrender.com`

---

### 1. Cadastrar Usuário

- **Método:** `POST`
- **Endpoint:** `/users/signup`
- **Descrição:** Cria um novo usuário na aplicação.
- **Exemplo de Requisição:**
POST /users/signup
{
"name": "leo",
"email": "leo@",
"password": "1"
}

### 2. Login do Usuário

- **Método:** `POST`
- **Endpoint:** `/users/login`
- **Descrição:** Faz login do usuário e gera um token de autenticação.
- **Exemplo de Requisição:**
POST /users/login
{
"email": "leo@",
"password": "1"
}

### 3. Criar Mensagem

- **Método:** `POST`
- **Endpoint:** `/notes/message`
- **Descrição:** Cria uma nova mensagem (recado) associada ao e-mail do usuário.
- **Exemplo de Requisição:**
POST /notes/message {
"email": "leo@",
"title": "oi",
"description": "só testando"
}

### 4. Ler Mensagens por E-mail

- **Método:** `GET`
- **Endpoint:** `/notes/message/:email`
- **Descrição:** Retorna todas as mensagens associadas ao e-mail fornecido.
- **Exemplo de Requisição:**
GET /notes/message/leo@

### 5. Atualizar Mensagem

- **Método:** `PUT`
- **Endpoint:** `/notes/message/:id`
- **Descrição:** Atualiza uma mensagem existente baseada no id.
- **Exemplo de Requisição:**
PUT /notes/message/1
{
"title": "tchau",
"description": "testado"
}

### 6. Deletar Mensagem por ID

- **Método:** `DELETE`
- **Endpoint:** `/notes/message/:id`
- **Descrição:** Deleta uma mensagem com base no id.
- **Exemplo de Requisição:**
DELETE /notes/message/1


4. Acesse a aplicação localmente em `http://localhost:3000`.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Hospedagem: Render
