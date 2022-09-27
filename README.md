<div align="center" background="#ffffff">
  <img src="https://raw.githubusercontent.com/marciovz/movie-store/main/src/assets/logo-movie-store.svg" width="200" alt="Movie Store" />
</div>

# Introduction

[Movie Store](https://github.com/marciovz/movie-store) é uma loja de filmes fictícia, onde o cliente pode procurar por um determinado filme, marcá-lo como favoritos, inserir em um carrinho de compra e finalizar sua compra.

<p align="center">
<img alt="Movie Store Main" 
src="https://github.com/marciovz/movie-store/src/assets/readme-files/screen-main.png"  />
</p>

## 1 - Requisitos

- Node.js versão 16
- NPM versao 8
- Conta no site [THE MOVIE DATA BASE API](https://developers.themoviedb.org)

## 2 - Instalação

  Faça o download ou clone este repositório em sua máquina local.
  Abra o terminal na pasta raís do projeto e rode o comando

```shell
  $ npm install
```

  Crie um arquivo .env na raiz do projeto. Copie o código do arquivo .env-example como base.
  Crie uma conta no site The Movie Data API, gere uma chave de api, e adiciona no seu arquivo .env

```js
  VITE_API_KEY=YOUR-KEY-API
  VITE_API=https://api.themoviedb.org/3/movie/
  VITE_API_SEARCH=https://api.themoviedb.org/3/search/movie/
  VITE_IMG=https://image.tmdb.org/t/p/w500/
```

## 3 - Rodando a aplicação 

  Na pasta do projeto no terminal, rode o comando

```shell
  $ npm run dev
```

## 4 - Visualizando a aplicação

  Abra um navegador e digite a url localhost:3001
  

## 5 - Tecnologias

- Vite
- ReactJS 
- Styled Components
- yup
- axios
- Phosphor React
