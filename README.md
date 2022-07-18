# 🛒 API-Ingredientes-em-Foco 

> ### 💬 Sobre o projeto
O supermercado SQ encontra dificuldades na gestão de
seus produtos em relação a: apresentar para os clientes os produtos industrializados e ter a certeza se há
ou não a presença dos ingredientes em sua composição e desse modo, aumentar a inclusão
e facilitar a vida de quem tem alergias alimentares, em especial as mais graves.

<br/>

> ### 👥 Atores do Sistema
Atores | Descrição
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

> ### 🖥 Telas identificadas para o sistema
### Telas em gerais
- Tela visão do usuário
- Tela visão do Administrador
- Tela do ADM p/ gerenciar produtos
- Tela do ADM p/ gerenciar fornecedores
- Tela visão do Fornecedor
- Tela de login
- Tela de cadastro
- Tela com filtro e produtos

### Página inicial
- Barra de busca
- Ícone de login e cadastro
- Barra de navegação
- Carrossel com opções de produtos
- Tópicos sobre:
	- Quem Somos?
	- Alergia Alimentar.
	- Principais alergênicos.
- Botão cadastrar

### Tela de login
- Usuário
- Senha
- Esqueci a senha
- Opção para se cadastrar (Ir para formulário de cadastro)

### Tela de formulário de cadastro
- Opção de cadastrar Cliente ou Fornecedor
- Barra de nome
-   ''      de email
-   ''      de data de nascimento
-   ''      de CPF
-   ''      de senha
- Botão de cadastro

### Tela de cadastrar produto
- Nome do produto
- Nome da empresa/fabricante
- Área de ingredientes
- Área de selecionar uma foto do produto
- Botão de cadastrar

### Tela de visão de usuário comum
- Título com a palavra Produtos
- Cards com os produtos
- Informações sobre ingredientes e fabricante
- Foto do produto
- Botão de cadastrar produtos

### Tela de filtro
- Título com palavra chave pesquisada
- Barra de busca
- Barra de opção de filtragem
- Cads com resultado da busca

### Tela de visão do administrador
- Mensagem de boas vindas p/ o ADM
- Três links para selecionar o tipo de usuário que ele irá administrar
- Cards de produtos com opções de editar

</br>

> ### 💡 Modelo de Dados Conceitual
<img src="https://i.pinimg.com/564x/9f/8a/01/9f8a0105758a9b99def47095a1dfc2fb.jpg" />
</br>

> ### 💡 Modela de Dados Lógico
<img src="https://i.pinimg.com/564x/9c/2c/48/9c2c4831781661a38c9fe3bf05e5fb92.jpg" />
<br/>

> ### 🔁 Passo-a-passo para fazer a clonagem do projeto (repositório)

```bash
# Comando para fazer a clonagem do repositório:
$ git clone https://github.com/heitordiasdev/Ingredientes-em-Foco.git

# Acesse a pasta do projeto:
$ cd Ingredientes-em-Foco

# Instale todas as dependências:
$ npm install

# Lembre-se! Antes de dar o "npm start" no projeto, inicialize a API com o mesmo comando.

# A API se encontra no repositório:
# https://github.com/heitordiasdev/API-Ingredientes-em-Foco

# Caso esteja passando a URL base do axios com o arquivo ".env", verifique se o arquivo
# ".env" está contendo este comendo abaixo dentro do arquivo ".env". 
$ REACT_APP_API="http://localhost:8080".

# Execute o comando abaixo para iniciar o servidor:
$ npm start

# Copie a URL abaixo e cole no seu navegador:
$ http:/localhost:3000

# Obs: Certifique-se que as informações deste projeto estejam batendo com as da sua máquina.
# Ex: os números da porta do sistema, a porta da API e a URL passada no arquivo .env.

```
</br>

> ### 🚀 Equipe de desenvolvimento - ⚡ Turing
<table align="center">
  <tr align="center">
    <td>
      <a href="https://github.com/heitordiasdev">
        <img src="https://avatars.githubusercontent.com/heitordiasdev" width=100 />
        <p>Heitor <br/>Dias</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/CintiaBraulino">
        <img src="https://avatars.githubusercontent.com/CintiaBraulino" width=100 />
        <p>Cintia <br/>Braulino</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/RubensLFerreira">
        <img src="https://avatars.githubusercontent.com/RubensLFerreira" width=100 />
        <p>Rubens <br/>Lima</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/emillymar">
        <img src="https://avatars.githubusercontent.com/emillymar" width=100 />
        <p>Emilly <br/>Marques</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/Alicia-Alexia">
        <img src="https://avatars.githubusercontent.com/Alicia-Alexia" width=100 />
        <p>Alicia <br/>Alexia</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/IgorPAS">
        <img src="https://avatars.githubusercontent.com/IgorPAS" width=100 />
        <p>Igor <br/>Silva</p>
      </a>
    </td>
  </tr>
  <tr align="center">
    <td>
      <a href="https://github.com/aucoliveira">
        <img src="https://avatars.githubusercontent.com/u/21234981?v=4" width=100 />
        <p>Augusto <br/>Cesar</p>
      </a>
    </td>
  </tr>
</table>
