const http = require("http");
const url = require("url");
const queryString = require("querystring");
// handle url encode data
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const parsedData = queryString.parse(data);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify ({ message: "Form Data received", parsedData }));
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
});

// middleware function for log in request
// function logRequest(req, res, next) {
//   console.log(`${req.method} req made to ${req.url}`);
//   next(req, res);
// }

// const server = http.createServer((req, res) => {
//   logRequest(req, res, (req, res) => {
//     const { pathname } = url.parse(req.url);
//     if (pathname.startsWith("/user/")) {
//       const userId = pathname.split("/")[2];
//       res.writeHead(200, { "content-type": "text/plain" });
//       res.end(`User id is:- ${userId}`);
//     } else {
//       res.writeHead(404, { "content-type": "text/plain" });
//       res.end("Page not found");
//     }
//   });
// });

// Dynamic route handler
// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url);
//   if (pathname.startsWith("/user/")) {
//     const userId = pathname.split("/")[2];
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end(`User Id:- ${userId}`);
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// Route Handler
// const routes = {
//   "/": (req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Welcome to homepage");
//   },
//   "/about": (req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Welcome to About Page");
//   },
//   "/notfound": (req, res) => {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page not found");
//   },
// };

// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url);
//   if (routes[pathname]) {
//     routes[pathname](req, res);
//   } else {
//     routes["/notfound"](req, res);
//   }
// });

// Get method
// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("Welcome to homepage");
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page not found");
//   }
// });

// Post method
// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/submit") {
//     let body = " ";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       res.writeHead(200, { "content-type": "application/json" });
//       res.end(JSON.stringify({ message: "Data received", data: body }));
//     });
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// handle query
// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url.startsWith("/search")) {
//     // it contains all the query from the url
//     const queryObject = url.parse(req.url, true).query;

//     res.writeHead(200, {
//       "content-type": "application/json",
//       "custom-header": "Node JS server",
//       "custom-trackin": "1234",
//     });
//     res.end(JSON.stringify({ message: "Query Received", queryObject }));
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Route not found");
//   }
// });

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
