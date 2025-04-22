# Gerenciamento de Jogadores

Este é um sistema para gerenciamento de jogadores de um time, permitindo o registro e login do time, além de operações CRUD para jogadores. O sistema utiliza autenticação JWT para proteger as rotas relacionadas aos jogadores.

## Funcionalidades

- Registro e login de times com e-mail e senha.
- Cadastro, atualização, exclusão e listagem de jogadores.
- Proteção de rotas de jogadores com autenticação via Bearer Token.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para manipulação do banco de dados.
- **JWT (jsonwebtoken)**: Para autenticação e proteção de rotas.
- **Swagger**: Para documentação da API.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **bcrypt**: Para hash de senhas.

## Instalação e Configuração

1. Clone o repositório:  
   git clone https://github.com/GuilhermeTBedin/gerenciamento-jogadores.git  
   cd gerenciamento-jogadores
2. Instale as dependências:  
   ``npm install``  
3. Configure o arquivo .env com as variáveis de ambiente necessárias, como a URL do banco de dados e a chave jwt.  
4. Execute as migrações do Prisma para configurar o banco de dados:  
   ``npx prisma migrate dev``  
5. Inicie o servidor em modo de desenvolvimento:  
  ``npm run dev``  
6. Acesse a documentação da API no navegador:  
  http://localhost:3000/api-docs

## Rotas da API
Times
- POST /team/signup: Criação de um time.
- POST /team/login: Login do time e geração de token JWT.

Jogadores (Rotas Protegidas)
- GET /team/players: Listagem de todos os jogadores.
- POST /team/player: Criação de um jogador.
- PUT /team/player/:id: Atualização de dados de um jogador.
- DELETE /team/player/:id: Exclusão de um jogador.

## Melhorias Futuras

Implementar funcionalidade de transferência de jogadores.
