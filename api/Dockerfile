# Use a imagem Node.js 20.11.1 como base
FROM node:20.11.1-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e yarn.lock para instalar as dependências com Yarn
COPY package.json yarn.lock ./

# Instale as dependências usando Yarn
RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Compile o projeto (se estiver usando TypeScript)
RUN yarn build

# Exponha a porta onde a aplicação será executada
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD ["node", "dist/main.js"]
