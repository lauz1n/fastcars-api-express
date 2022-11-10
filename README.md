

<h3 align="center">Fast Cars App</h3>

  <p align="center">
    O projeto conta com a utilização de tecnologias atuais para desenvolvimento, pensando em reutilização de Componentes no React, estruturação correta de pastas e demais vantagens.
    Neste projeto utilizei Express.js para construção do Backend, juntamente ao JWT (Json Web Token), para validação de usuário, dando um token único a cada usuário.
    O API faz integração com MongoDB, para armazenamento das informações enviadas, para conexão e criação de Models entre as partes, foi utilizado o Mongoose, o que facilita a utilização do DB. Todos os Endpoints foram testados durante o desenvolvimento utilizando o Postman.
    No Frontend foi utilizado Material UI para construção da parte visual, o projeto também conta com React Router Dom, fornecendo paginação na navegação do usuário. 
    As funcionalidades de Administrador estão sendo controladas através do uso do ContextAPI do React, onde passo um estado global de Login, caso a verificação conste como falsa na existência de um Token após o login, o usuário não pode acessar as rotas de Administração.
    Os carros estão mapeados e listados com nome, marca, modelo, preço e todos também contém um id único gerado na hora da criação.



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Website vitrine com Dashboard

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Desenvolvido utilizando

* React.js (Frontend)
* Express.js (Backend)
* Material UI (Frontend)
* JWT (Json Web Token) (Backend)
* React Router Dom (Frotnend)
* HTML e CSS Modules (Frontend)
* MongoDB (Database) (backend)
* Postman (Teste de Endpoints)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Como executar o projeto

### Instalação

1. Clonar o repositório
   ```sh
   git clone https://github.com/lauz1n/fastcars-api-express.git
   ```
2. Instalar NPM
   ```sh
   npm install
   ```
3. Splitar terminal e acessar pastas frontend e backend
   ```
   cd backend, cd frontend-app
   ```
4. Utilizar npm start para começar
   ```
   npm start 
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Utilização

O website conta com funcionalidades simples, desenvolvido utilizando tecnologias atuais para funcionamento.

### Logo na primeira página, podemos ver a representação simples do que seria a vitrine.
 * Na vitrine, temos acesso ao filtro, onde os carros podem ser ordenados por valor crescente e decrescente.
### Na página de login, temos um formulário simples, onde o usuário deve se Identificar dando seu nome, usuário e senha.
 * Nome: Administrador, Usuário: admin, Senha: admin0550
### Após logado, o usuário será imediatamente navegado para a página de Dashboard, onde poderá fazer o cadastro, delete e edit de Carros.
 * Para cadastrar um carro, preencher todos os campos e fazer o upload de uma imagem em formato jpg ou png. As rotas de administrador são protegidas utilizando o React Router Dom e fazendo a verificação de Token.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



