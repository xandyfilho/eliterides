# 🚗 EliteRides

**EliteRides** é uma aplicação web para cadastro e visualização de veículos.

## 🌟 Funcionalidades

- **Cadastro de Veículos**: Adicione novos veículos com todos os detalhes importantes.
- **Dropdown de Cores**: Selecione a cor do carro usando um menu suspenso.
- **Validação de Idade**: Somente veículos com menos de 20 anos podem ser cadastrados.
- **Página de Inventário**: Veja todos os veículos cadastrados na página de catálogo.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS Modules**: Para estilização modular e escopo de CSS.
- **JSON Server**: Simulação de uma API RESTful para o desenvolvimento e testes.
- **Git**: Controle de versão.
- **Visual Studio Code**: Editor de código.
- **Node.js**: Ambiente de execução para JavaScript no servidor, utilizado para o backend e para o desenvolvimento local.
- **React Router DOM**: Biblioteca para roteamento dinâmico em aplicações React.
- **React Icons**: Biblioteca de ícones populares para React.

## 🚀 Getting Started with Create React App

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

### 📋 Pré-requisitos

Você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código, como [Visual Studio Code](https://code.visualstudio.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/elite-rides.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd elite-rides
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor JSON (simulação de API RESTful):

    ```bash
    npx json-server --watch db.json --port 5000
    ```

5. Em uma nova janela de terminal, inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```
7. Em uma nova janela de terminal, inicie o banco de dados: 

    ```bash
        npm run backend
    ```

6. Acesse a aplicação em `http://localhost:3000`.


## Layout das pages do Projeto

1. Home
![Captura de tela 2024-09-02 110750](https://github.com/user-attachments/assets/d9260180-8edb-4f58-97c2-7926e4bf6010)

2. Cadastro de veículo
![Captura de tela 2024-09-02 110813](https://github.com/user-attachments/assets/96c8f329-fc81-42b2-9cfe-84f50711e95d)

3. Inventário de veículos cadastrados
![Captura de tela 2024-09-02 110831](https://github.com/user-attachments/assets/96d6e8d3-2ed2-45a5-9d9e-e696f6600746)



## 📁 Estrutura do Projeto

```plaintext
elite-rides/
│
├── node_modules/         # Dependências do projeto
├── public/               # Arquivos públicos como ícones, imagens e index.html
├── src/                  # Código-fonte da aplicação
│   ├── components/       # Componentes reutilizáveis
│   │   ├── form/         # Componentes de formulário
│   │   │   ├── Input.jsx
│   │   │   ├── Input.module.css
│   │   │   ├── Select.jsx
│   │   │   ├── Select.module.css
│   │   │   ├── SubmitButton.jsx
│   │   │   └── SubmitButton.module.css
│   │   ├── layout/       # Componentes de layout
│   │   │   ├── Container.jsx
│   │   │   ├── Container.module.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.module.css
│   │   │   ├── LinkButton.jsx
│   │   │   ├── LinkButton.module.css
│   │   │   ├── Message.jsx
│   │   │   ├── Message.module.css
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   ├── pages/            # Páginas da aplicação
│   │   ├── Car.jsx
│   │   ├── Car.module.css
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   ├── Inventory.jsx
│   │   ├── Inventory.module.css
│   │   ├── NewCar.jsx
│   │   └── NewCar.module.css
│   ├── project/          # Componentes específicos do projeto
│   │   ├── CarCard.jsx
│   │   ├── CarCard.module.css
│   │   ├── CarForm.jsx
│   │   └── CarForm.module.css
│   ├── img/              # Imagens usadas na aplicação
│   ├── App.jsx           # Componente principal da aplicação
│   ├── index.css         # Estilos globais
│   └── index.js          # Arquivo de entrada principal
│
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
├── db.json               # Banco de dados JSON para desenvolvimento
├── package-lock.json     # Versões exatas das dependências
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```
### 💡 Próximas Melhorias

- Implementar autenticação de usuários.
- Integração com uma API real de veículos.
- Implementar responsividade.


## ✉️ Contato

Se tiver alguma dúvida ou sugestão, entre em contato:

- **Nome:** [Xandy Filho](https://github.com/xandyfilho)
- **E-mail:** dev.alexandrefilho@outlook.com
