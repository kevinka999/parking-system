# Apresentação
Sistema de gerenciamento de Estacionamento e controle de Preço.

## Front-end
Front-end desenvolvido em **ReactJS** com a biblioteca Material-UI.
## Back-end
Aplicação desenvolvida em **.NET Core** *(C#)*.
## Testes Automatizados
Testes unitários desenvolvido em **XUnit** com **NSubstitute** para *Mock*.

# Como utilizar
1. Clone o repositório no caminho de sua escolha
2. Rode a API em configuração local na *porta 3000*
3. Inicie o front utilizando o react-script *"**npm start**"*

PS: Caso utilize algum endereço/porta diferente para executar a aplicação, será necessário configurar o Axios no front-end.

## Configurando caminho da Aplicação no Axios
1. Entre no arquivo \Estacionamento\website\src\services\api.js
2. Modifique a string da propriedade **baseURL** para seu respectivo *endereço:porta*

EX: baseURL: "https://127.0.0.1:8080"
