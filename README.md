# Sobre o projeto

- Esse projeto surgiu apenas para testar uma criação de um gateway utilizando o express.

## Pré-requisitos

- Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: 

```yml
- Git
- Node.js
- Yarn
```

### Crie o arquivo `config.yml`

```yml
nameApplication: API Gateway
hostApplication: http://localhost

config:
  port: 3333
  enabledMorgan: true

security:
  enabledJSON: true 
  enabledHelmet: true

services:
  - nameRoute: users
    url: http://localhost:3001
  - nameRoute: products
    url: http://localhost:3002
```


### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/WeslleyFratini/api-gateway

# Acesse a pasta do projeto no terminal/cmd
$ cd gateway

# Instale as dependências
$ yarn install

# Configure o arquivo config.yml conforme o exemplo.

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 
- Acesse http://localhost:3333
```