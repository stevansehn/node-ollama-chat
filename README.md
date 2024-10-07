# Ollama Chatbot from Modelfile

This project demonstrates how to create a custom chatbot using Ollama and a Modelfile based on the Llama 3.1 model. The Modelfile defines parameters to adjust the model's behavior, making it more whimsical and creative. A Node.js script is then used to interact with the chatbot through a command-line interface, allowing users to engage in a conversation with the AI.

## Requisites

 - [Node.js](https://nodejs.org/en/)
 - [Ollama](https://ollama.com/)

## Usage

1. Run the model lama3.1 in your local machine with ollama:

    ```bash
    ollama create my-model -f ./Modelfile
    ```

2. Clone the project and navigate to the project directory:

    ```bash
    git clone https://github.com/stevansehn/node-ollama-chat.git
    cd node-ollama-chat
    ```
3. Install packages:

    ```bash
    npm i
    ```

4. Run the script:

    ```bash
    node index.js
    ```

5. Interact with the chatbot:

    ```bash
    You: Hello, how are you?
    Chatbot: I'm doing well, thank you! How can I help you today?
    ```

6. Stop the chatbot:

    ```bash
    You: stop
    Chatbot: Goodbye!
    ```
