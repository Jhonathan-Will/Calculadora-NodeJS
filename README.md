# Calculadora NodeJS

## Descrição

Este é uma projeto de uma calculadora, responsiva, que permite realizar operações como adição, subtração, multiplicação e divisão e quando quiser rever calculos antigos apatir da interface do histórico.

## Feito em:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Livrarias e Frameworks
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Banco de dados
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Funcionalidades

- Operações Matematícas: Realiza operações de matematíca básica;
- Responsividade: Projetada para de adaptar a qualquer dispositivo;
- Histórico: Possivel rever contas antigas.

## Como instalar e Executar

1. Clone este repostitório:
```bash
    git clone https://github.com/Jhonathan-Will/Calculadora-NodeJS
```

2. Navegue até o diretório do projeto;

3. Instale as dependências: 
```bash
  npm install
```

4. Variaveis de ambiente:

    O projeto usa um arquivo **.env** para armazenar dados para acessar o banco de dados. Certifique-se de criar um arquivo .env na raiz do projeto com o seguinte conteúdo:
    
    ```env
        DATABASE='{O nome para seu banco de dados}'
        USER='root'
        PASSWORD='{senha para acessar seu banco local}'
        HOST='localhost'
    ```
5. Configure o banco de dados:

    em seu banco de dados local crie um novo schema com o nome que foi informado no arquivo **.env**. Nenhuma tabela precisa ser criada, somente o schema.

6. Rode o projeto:

    Na raiz do projeto lançe o comando: 

    ```bash
        npm start
    ```

    e agora em um navegador abra uma localhost nessa porta: 

    ```bash
        http://localhost:8080
    ```
    
