const { SlowBuffer } = require("buffer");
const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  // klasa Sales ce da naslijedi sve iz EventEmitter
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  // ovdje je parametar 'newSale' sto znaci da ispunjava uslov za pokretanje funkcije
  console.log("Costumer name: Jasmin");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9); // ovo je kao npr event listener sto pise 'click', ovdje pise 'newSale'

////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});
server.on("request", (req, res) => {
  // kad serveru posaljemo request on nam vrati output
  console.log("Another request 😊");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  // kreiranje server porta
  console.log("Waiting for requests..."); // ispis koji se pokaze kad pokrenemo server
});
