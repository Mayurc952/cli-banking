const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Wellcome To City Bank; Enter the following information and use our services. PRESS ANY KEY TO START", (a0) => {
rl.question("Please Enter your Name:", (a1) => {
rl.question("Please Enter your Adhar number :", (a2) => {
rl.question("Please Enter Bank Operation(credit or debit):", (a3) => {
rl.question("Please Enter Amount: ", (a4) => {
let info = [[a1, a2, a3, a4]];
  
console.table(info);

rl.close();
});
});
});
});
});