# PET Shop na WEB - Plataforma de Agendamento Online

## 📖 Sobre o Projeto

Este projeto é uma plataforma web desenvolvida como parte do **1º Trabalho de Programação Web** da Universidade Federal de Santa Catarina (UFSC), Campus Araranguá


## ✨ Funcionalidades Principais


* **Visão do Cliente:**
    * Exibição de um calendário semanal com apenas os horários que possuem vagas.
    * Ocultação automática de slots de tempo que estão esgotados (capacidade igual a zero).
    * Possibilidade de selecionar um horário e confirmar o agendamento.
* **Visão do Pet Shop (Admin):**
    * Interface para visualizar todos os horários agendados com os nomes dos respectivos clientes.
* **Sistema de Agendamento:**
    * Ao receber uma solicitação, o servidor registra o agendamento e atualiza a disponibilidade do horário, decrementando a capacidade do slot.

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Backend:** Node.js com Express.js
* **Banco de Dados:** MongoDB com Mongoose (ODM)
* **Frontend:** HTML5, CSS3 e JavaScript (Vanilla JS)
* **Comunicação:** API RESTful com requisições `fetch` (POST/GET)
* **Servidor:** O frontend é servido como uma página estática diretamente pelo Express.

## 📂 Estrutura do Projeto

```
/petshop-web/
|-- /api/                  # Contém todo o código do backend
|   |-- /models/           # Schemas do Mongoose (Scheduling, User, Hour)
|   |-- /routes/           # Definição das rotas da API (Express Router)
|   |-- /controllers/      # Lógica de negócio das rotas
|   |-- dbConnect.js       # Lógica de conexão com o MongoDB
|   |-- seed.js            # Script para popular o banco com horários
|   |-- server.js          # Arquivo principal do servidor Express
|   |-- .env               # Arquivo para variáveis de ambiente (NÃO versionado)
|   |-- package.json
|
|-- /public/               # Contém todo o código do frontend
|   |-- /js/               # Scripts (client.js, petshop.js, apiService.js)
|   |-- /pages/            # Páginas HTML (client.html, petshop.html)
|   |-- index.html         # Página inicial
```

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm ou yarn
* Uma conta no MongoDB Atlas para obter a string de conexão com o banco de dados.

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/IgorFBastos/petshop-web.git 
    cd seu-repositorio
    ```

2.  **Instale as dependências do backend:**
    ```bash
    cd api
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Na pasta `api`, crie um arquivo chamado `.env`.
    * Dentro do `.env`, adicione a sua string de conexão do MongoDB Atlas:
        ```
        URL_DB=sua_connection_string_do_mongodb_atlas
        ```

4.  **Popule o Banco de Dados:**
    * Execute o script `seed.js` para popular a coleção de horários com a grade de disponibilidade inicial.
    ```bash
    npm run db:seed
    ```
    *(Este comando deve estar configurado no seu `package.json`)*

5.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```

6.  Abra seu navegador e acesse `http://localhost:5000` (ou a porta que você configurou).

## 👥 Autores


* **Nome:** Igor Fiedler de Bastos  
* **Matrícula:** 23250402


---
_Projeto desenvolvido para a disciplina de Programação Web - UFSC Araranguá._
