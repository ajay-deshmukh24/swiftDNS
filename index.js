import { createResponse, createTxtAnswer, startUdpServer } from "denamed";

startUdpServer((query) => {
  // console.log(query);
  const question = query.questions[0];
  console.log("Question :", question);

  return createResponse(query, [createTxtAnswer(question, "hello world")]);
});

// console.log("hii from me");
