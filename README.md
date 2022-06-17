# 🛒 API-Ingredientes-em-Foco 

> ### 💬 Sobre o projeto

O supermercado SQ encontra dificuldades na gestão de
seus produtos em relação a: apresentar para os clientes os produtos industrializados e ter a certeza se há
ou não a presença dos ingredientes em sua composição e desse modo, aumentar a inclusão
e facilitar a vida de quem tem alergias alimentares, em especial as mais graves.

<br/>

> ### 👥 Atores do Sistema
Atores | Descrção
:--- | :--- 
Cliente | <p>O cliente pode visualizar, cadastrar ou editar alimentos na comunidade.</p>
Administrador |<p>O administrador poderá visualizar e criar postagens na comunidade, além de poder editar ou excluir postagens dos usuários (cliente, fornecedor). O administrador poderá banir usuários que não estejam comprindo com as normais da comunidade.</p>
Fornecedor |<p>Os fornecedores poderão visualizar, cadastrar e editar alimentos que fornecem.</p>

<br/>

> ### 🛠 Funcionalidades
Funcionalidades | Descrição
:--- | :---
RF01 | <p>Possibilidade de cadastrar, visualizar, editar e deletar produtos (utilize banco de dados).</p>
RF02 | <p>O produto deve ter nome e conter seus ingredientes, imagem(opcional).</p>
RF03 | <p>Possibilidade de pesquisar por alimentos e visualizar os ingredientes.</p>
RF04 | <p>Possibilidade de filtrar alimentos que não tenham determinados ingredientes.</p>
RF05 | <p>Possibilidade de filtrar alimentos que tenham determinados ingredientes.</p>

<br/>

> ### 🔁 Passo-a-passo para fazer a clonagem do projeto (repositório)
```bash
# Comando para fazem a clonagem do repositório:
$ git clone https://github.com/heitordiasdev/API-Ingredientes-em-Foco.git

# Acesse a pasta do projeto:
$ cd API-Ingredientes-em-Foco

# Instale todas as dependências:
$ npm install

# Altere as informações do arquivo database.js com as credencias do seu postgres:
# Acesse a pasta src/config/database.js
$ module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'ingredientes_in_foco',
    username: 'postgres',
    password: 'senha123'
};

# Execute o comando abaixo para iniciar o servidor:
$ npm start

# Copie a URL abaixo e cole no seu navegador:
$ http:/localhost:3000
```
