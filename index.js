import ollama from "ollama";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chat = async () => {
  const messages = [];

  while (true) {
    const userInput = await new Promise(resolve => {
      rl.question("You: ", resolve);
    });

    if (userInput.toLowerCase() === "stop") {
      console.log("Chat ended.");
      rl.close();
      break;
    }

    messages.push({ role: "user", content: userInput });

    try {
      const response = await ollama.chat({
        model: "my-model",
        messages: messages,
      });
      console.log("AI:", response.message.content);
      messages.push(response.message);
    } catch (e) {
      console.log("Error: ", e.message);
    }
  }
};

chat();

