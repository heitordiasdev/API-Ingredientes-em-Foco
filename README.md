# 🛒 API-Ingredientes-em-Foco 

> ### 💬 Sobre o projeto

Diante desse contexto, atualmente o supermercado SQ encontra dificuldades na gestão de
seus produtos: apresentar para os clientes os produtos industrializados e ter a certeza se há
ou não a presença dos ingredientes em sua composição e desse modo, aumentar a inclusão
e facilitar a vida de quem tem alergias alimentares, em especial as mais graves.

<br/>

> ### 👥 Atores do Sistema
Atores | Descrção
:--- | :--- 
Cliente | O cliente pode visualizar ou cadastrar alimentos na comunidade, além de poder editar ou excluir postagens de sua autoria.
Administrador |O administrador poderá visualizar e criar postagens na comunidade, além de poder editar ou excluir postagens dos usuários (cliente, fornecedor). O administrador poderá banir usuários que não estejam comprindo com as normais da comunidade.
Fornecedor | No cadastro de usuários e alimentos terá campos extras para usuários do tipo fornecedor, contendo entrada para CNPJ e a empresa na qual trabalham. Os fornecedores poderão visualizar, cadastrar, editar e excluir alimentos que cadastraram.

<br/>

> ### 🛠 Funcionalidades
Funcionalidades | Descrição
:--- | :---
RF01 | Possibilidade de cadastrar, visualizar, editar e deletar produtos (utilize banco de dados)
RF02 | O produto deve ter nome e conter seus ingredientes, imagem(opcional)
RF03 | Possibilidade de pesquisar por alimentos e visualizar os ingredientes
RF04 | Na página de visualização do alimento, ter a possibilidade de buscar por um determinado ingrediente (para confirmar se este ingrediente está presente ou não)
RF05 | Possibilidade de filtrar alimentos que não tenham determinados ingredientes
RF06 | Possibilidade de filtrar alimentos que tenham determinados ingredientes
