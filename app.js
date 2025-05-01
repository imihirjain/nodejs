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

// File System methods
// Read Stream
// const readableStream = fs.createReadStream("example.txt", { encoding: "utf8" });

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readableStream.on("end", () => {
//   console.log("Finished reading the file");
// });

// readableStream.on("error", (err) => {
//   console.log("Error to read the file", err);
// });

// Write stream
// const writeableStream = fs.createWriteStream("output2.txt");
// writeableStream.write("Hello ");
// writeableStream.write("World");

// writeableStream.end();

// writeableStream.on("finish", () => {
//   console.log("Finished writing");
// });

// piping example copy content of one file to another
// const readableStream = fs.createReadStream("example.txt");
// const writeableStream = fs.createWriteStream("example-out.txt");

// readableStream.pipe(writeableStream);

// writeableStream.on("finish", () => {
//   console.log("finished copied the file");
// });

// Readline system
// const readline = require("readline");

// const readableStream = fs.createReadStream("example.txt");

// const rl = readline.createInterface({ input: readableStream });

// rl.on("line", (line) => {
//   console.log("Line:- ", line);
// });

// rl.on("close", () => {
//   console.log("Read line finished reading the line");
// });

// Creating the directory
// Asynchronous method
// fs.mkdir("newDir", (err) => {
//   if (err) {
//     return console.log("Error creating directory", err);
//   }
//   console.log("New directory created successfully");
// });

// Synchronous method
// fs.mkdirSync("newDir2");
// console.log("Directory created successfully");

// Read the directory
// Asynchrounously
// fs.readdir("./", (err, files) => {
//   if (err) {
//     return console.log("Error in reading the file", err);
//   }
//   console.log("Directory content ", files);
// });

// Synchronously
// const files = fs.readdirSync("./");
// console.log("Directory Content ", files);

// Checking directory exist
// const dirName = "newDir3";
// if (fs.existsSync(dirName)) {
//   console.log("Directory exist");
// } else {
//   console.log("Directory not exist");
// }

// Delete directory
// rmdir remove only empty directory
// fs.rmdir("newDir", (err) => {
//   if (err) {
//     return console.log("Unable to delete the directory");
//   }
//   console.log("Directory removed successfully");
// });

// fs.rmdirSync("newDir2");
// console.log("Directory removed synchronously");

// rm removed non empty directory
// fs.rm("newDir", { recursive: true }, (err) => {
//   if (err) {
//     return console.log("Error removing directory", err);
//   }
//   console.log("Directory removed");
// });

// Even emitter handle custom event
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Registering an even listener
emitter.on("test1", () => {
  console.log("An event occured in test1");
});

emitter.on("error", (err) => {
  console.log("Error event:- ", err.message);
});

try {
  emitter.emit("test1");
  emitter.removeListener("test1");
  emitter.emit("test1");
} catch (error) {
  emitter.emit("error", error);
}
