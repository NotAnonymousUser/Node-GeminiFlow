import { GoogleGenerativeAI } from "@google/generative-ai";
import inquirer from "inquirer";
import "dotenv/config";

const answer = await inquirer.prompt({
  name: "aiPrompt",
  type: "input",
  message: "Enter the prompt for AI",
  prefix: "",
});

const prompt = answer.aiPrompt;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  //   const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
