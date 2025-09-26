# Teste de API com IA (Claude da Anthropic)

Este projeto é uma API simples desenvolvida para testar a integração e o consumo da IA Claude, da Anthropic. O objetivo principal é servir como um estudo prático sobre como enviar requisições, manipular respostas e gerenciar dados ao interagir com um modelo de linguagem avançado.

Além disso, este projeto serve como um ponto de partida e aprendizado para futuras aplicações que utilizem inteligência artificial.

## ✨ Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução para o TypeScript no servidor.
*   **Nest.js**: Framework para a construção da API.
*   **@anthropic-ai/sdk**: SDK oficial da Anthropic para interagir com a API do Claude.
*   **dotenv**: Para gerenciamento de variáveis de ambiente.

## 🚀 Começando

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
*   Um gerenciador de pacotes como `npm` ou `yarn`.
*   Uma chave de API da Anthropic.

### Instalação

1.  Clone o repositório para a sua máquina:
    ```sh
    git clone https://github.com/Alexsandro-J-Ludwig/cloude_api_system.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd cloude_api_system
    ```
3.  Instale as dependências:
    ```sh
    npm install
    ```
4.  Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API da Anthropic:
    ```
    ANTHROPIC_API_KEY="sua_chave_de_api_aqui"
    PORT=3000
    ```

### Executando a Aplicação

Para iniciar o servidor, execute o comando:
