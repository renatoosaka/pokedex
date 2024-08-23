# Use a imagem Node.js 20.11.1 como base para compilar o frontend
FROM node:20.11.1-alpine AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e yarn.lock para instalar as dependências com Yarn
COPY package.json yarn.lock ./

# Instale as dependências usando Yarn
RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos do projeto
COPY . .

# Substitua a variável API_URL no environment.prod.ts pelo valor da variável de ambiente API_URL
ARG API_URL
RUN sed -i "s|apiUrl: ''|apiUrl: '${API_URL}'|" src/environments/environment.prod.ts

# Compile o projeto Angular para produção
RUN yarn build

# Use uma imagem Nginx para servir o frontend
FROM nginx:alpine

# Copie os arquivos compilados para o diretório de Nginx
COPY --from=build /app/dist/pokedex-app/browser /usr/share/nginx/html

# Exponha a porta onde o Nginx será executado
EXPOSE 80

# Nginx já define o comando de entrada padrão, então não precisamos de CMD aqui
