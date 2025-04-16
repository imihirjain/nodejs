const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayHello = require("./greetings");
const math = require("./math");
const lodash = require("lodash");

// fs methods
// fs.readFile("example.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// const content = "I am adding this content to output.txt file";
// fs.writeFile("output.txt", content, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File written successfully");
// });

// HTTP methods
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   //   res.setHeader("Content-type", "application/json");
//   res.setHeader("Content-type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// Path methods
// const directory = "/user/local";
// const filename = "example.txt";
// const fullName = path.join(directory, filename);
// console.log(fullName);

// os methods
// console.log("Platform:-", os.platform());
// console.log("CPU architecture:-", os.arch());
// console.log("Total Memory:-", os.totalmem());
// console.log("Free Memory:-", os.freemem());

// url methods
// const myUrl = new URL("https://example.com:8080/path/name?query=hello#hash");
// console.log("Host Name:-", myUrl.host);
// console.log("Path Name:-", myUrl.pathname);
// console.log("Search Params:-", myUrl.searchParams.get("query"));

// crypto methods
// const hash = crypto.createHash("sha256");
// hash.update("Mihir Jain");
// console.log(hash.digest("hex"));

// module install
// console.log(sayHello("Mihir"));

// console.log(math.add(5, 3));
// console.log(math.subtract(5, 3));

// NPM methods
// const myArr = [1, 2, 3, 4, 5];
// const reversed = lodash.reverse(myArr);
// console.log(reversed);
