const mentalStatsApi = require("./mentalStats");
var http = require("http");
var MongoClient = require("mongodb").MongoClient;
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8181 });

wss.on("connection", (ws) => {
  let id;

  ws.on("message", async (message) => {
    const { event, data } = JSON.parse(message);
    console.log(event);
    if (event === "start") {
      id = setInterval(() => {
        var url =
          "mongodb+srv://abbas:B3DBJIBEz6XE4fo4@cluster0.wk3n9v1.mongodb.net/mentalfit?retryWrites=true&w=majority&appName=Cluster0";
        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var query = { user: data.user };
          db.collection("mentallogs")
            .find(query)
            .toArray(function (err, result) {
              if (err) throw err;
              ws.send(JSON.stringify(result));
              db.close();
            });
        });
      }, 1500);
    } else {
      clearInterval(id);
    }
  });
});
