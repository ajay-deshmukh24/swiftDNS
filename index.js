import { startUdpServer } from "denamed";

startUdpServer((query) => {
  console.log(query);
});

console.log("hii from me");
