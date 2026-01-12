# Template Backend NodeJs

## 📋 Sumário

1. [Visão Geral](#visao-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Tipos de Usuários](#tipos-de-usuarios)
4. [Funcionalidades por Requisito](#funcionalidades-por-requisito)
5. [Requisitos Não Funcionais](#requisitos-nao-funcionais)
6. [Requisitos](#requisitos)
7. [Versões Utilizadas](#versoes-utilizadas)
8. [Como Executar o Servidor](#como-executar-o-servidor)
9. [Links Externos](#links-externos)
10. [Equipe de Desenvolvimento](#equipe-de-desenvolvimento)

<a name="visao-geral"></a>

---

## 🗺️ Visão Geral:
Neste repositório está o projeto de um template de backend desenvolvido em Node.js. O projeto consiste em uma base reutilizável para a construção de APIs, utilizando Fastify e Prisma. O template oferece uma estrutura organizada, escalável e pronta para produção, servindo como ponto de partida para o desenvolvimento de aplicações backend modernas.

---

<a name="estrutura-do-projeto"></a>

## 📂 Estrutura do Projeto:

```bash
├─── .github
│    └─── workflows
├─── .husky
├─── prisma
│    └─── migrations
│         └─── ...
├─── uploads
│    └─── profile-images
└─── src
     ├─── @types
     ├─── constants
     ├─── env
     ├─── lib
     ├─── services
     ├─── templates
     ├─── utils
     ├─── repositories
     │    └─── prisma
     │        └─── queries
     ├─── http
     │    ├─── controllers
     │    │    ├─── activity-area
     │    │    └─── user
     │    ├─── middlewares
     │    ├─── presenters
     │    └─── schemas
     │         ├─── activity-area
     │         ├─── user
     │         └─── utils
     └─── use-cases
          ├─── activity-area
          ├─── errors
          ├─── factories
          │    ├─── activity-area
          │    ├─── messaging
          │    └─── user
          ├─── messaging
          └─── user

```

---

<a name="tipos-de-usuarios"></a>

# 👤 Tipos de Usuários:

<div align="center">

| Tipo de Usuário   |            Permissões Principais                   |
| :---------------: | :------------------------------------------------: |
| ADMIN             |       Gerenciamento global do sistema              |
| DEFAULT           | Usuário do sistema sem permissões especiais        |

</div>

---

<a name="funcionalidades-por-requisito"></a>

## ✅ Funcionalidades por Requisito:

### 📌 Requisito 1 – (Nome do Requisito 1):

- [ ] 1.1 ...
- [ ] 1.2 ...
- [ ] 1.3 ...
- [ ] 1.4 ...

### 📌 Requisito 2 – (Nome do Requisito 2):

- [ ] 2.1 ...
- [ ] 2.2 ...
  - [ ] 2.2.1 ...
  - [ ] 2.2.2 ...
- [ ] 2.3 ...

---

<a name="requisitos-nao-funcionais"></a>

## 🧪 Requisitos Não Funcionais:

- [x] NF.1 - Segurança: Controle de acesso por tipo de usuário
- [ ] NF.2 - ...
- [ ] NF.3 - ...

---

<a name="requisitos"></a>

## ✔️ Requisitos:
Certifique-se de que você tenha os seguintes softwares instalados antes de continuar:

- [Docker](https://www.docker.com/) (versão mínima: 20.10)
- [Docker Compose](https://docs.docker.com/compose/) (versão mínima: 1.29)

---

<a name="versoes-utilizadas"></a>

## ⚙️ Versões de Tecnologias Utilizadas:
- **NodeJs**: 22.14.0
- **PostgreSQL**: 14.19-alpine3.21
- **Redis**: 8.2.0-bookworm

---

<a name="como-executar-o-servidor"></a>

## 💻 Como Executar o Servidor:
1. Abra o terminal - `CMD`, `PowerShell`, `Bash` ou similares - em algum diretório de preferência em sua máquina.

2. Clone este repositório com o comando:

```bash
git clone https://github.com/IN-Junior-UFF/astrobiologia-backend
```

3. Navegue para dentro do projeto clonado com o comando:

```bash
cd Template-Backend-NodeJs
```

4. Instale as dependências do projeto ao executar no console o comando:

```bash
# Se você utiliza npm:
npm install

# Se você utiliza pnpm:
pnpm install
```

5. Crie um arquivo `.env` na raiz do projeto copiando o conteúdo do `.env.example`:

```bash
copy .env.example .env
```

6. Preencha manualmente os valores do arquivo .env marcados como obrigatórios que não estiverem definidos.

7. Inicialize os contêiners do Docker executando o comando:

```bash
docker compose up -d
```

8. Execute o comando para inicializar o banco de dados e povoá-lo com com as informações definidas em `prisma/seed.ts`:

```bash
# Se você utiliza npm:
npm run db:reset

# Se você utiliza pnpm:
pnpm db:reset
```

9. Rode o projeto com o comando:

```bash
# Se você utiliza npm:
npm run start:dev

# Se você utiliza pnpm:
pnpm start:dev
```

---

<a name="links-externos"></a>

## 🔗 Links Externos:
- **Template Backend Utilizado**: <a href="#" target="_blank">Clique Aqui</a>
- **Pipefy do Projeto**: <a href="#" target="_blank">Clique Aqui</a>
- **Design Figma do Projeto**: <a href="#" target="_blank">Clique Aqui</a>
- **Documentação da API**: <a href="#">Clique Aqui</a>
- **Diagrama ER do Banco de Dados** (senha: ...): <a href="#">Clique Aqui</a>

---

<a name="equipe-de-desenvolvimento"></a>

## 👥 Equipe de Desenvolvimento:
- **Dev Backend**: <a href="#coloque o link para o perfil do github aqui" target="_blank">Nome 1</a>
- **Dev Backend**: <a href="#coloque o link para o perfil do github aqui" target="_blank">Nome 2</a>
- **Dev Backend**: <a href="#coloque o link para o perfil do github aqui" target="_blank">Nome 3</a>
