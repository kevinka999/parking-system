# Apresentação
Sistema de gerenciamento de Estacionamento e controle de Preço.

## Front-end
Front-end desenvolvido em **ReactJS** com a biblioteca Material-UI.
## Back-end
Aplicação desenvolvida em **.NET Core** *(C#)*.
## Testes Automatizados
Testes unitários desenvolvido em **XUnit** com **NSubstitute** para *Mock*.
## Banco de Dados
Banco de dados desenvolvido em **MySQL**.

# Como utilizar
1. Clone o repositório no *caminho* de sua escolha
2. Execute o arquivo *.\database_estacionamento.sql* para criar o banco de dados
2. Rode a API em configuração local na *porta 3000*
3. Inicie o front utilizando o react-script *"**npm start**"* no seu terminal

PS: Caso o *react* apresente algum erro de dependência, exclua o arquivo *.\website\package-lock.json* e execute o comando *npm install* no seu terminal.

PS²: Caso utilize algum endereço/porta diferente da expecificada acima para executar a aplicação, será necessário configurar o Axios no front-end.

## Configurando caminho da Aplicação no Axios
1. Abra o arquivo *.\website\src\services\api.js*
2. Modifique a string da propriedade **baseURL** para seu respectivo *endereço:porta*

EX: baseURL: "https://127.0.0.1:8080"
