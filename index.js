import { createResponse, createTxtAnswer, startUdpServer } from "denamed";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const GEMINI_API_KEY = process.env.API_KEY;
// console.log(GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

startUdpServer(async (query) => {
  // console.log(query);
  const question = query.questions[0];
  console.log("Question :", question);

  const prompt = "who is prime minister of india";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());

  return createResponse(query, [
    createTxtAnswer(question, result.response.text()),
  ]);
});

// console.log("hii from me");
