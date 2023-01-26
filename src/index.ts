import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"

const mongo = require("./util/db/mongo")
import Server_Schema from "./util/db/schemas/Server_Schema"

// Global variables
global.Connections = []
global.dashConnections = []
global.serverConnections = []
// Loval variables
const app = express();
const httpServer = createServer(app);
export const io = new Server(httpServer, { cors: {origin: "http://localhost:8080", credentials: true}, } );

const eventFiles = fs.readdirSync(path.join(__dirname, "./events")).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

io.on("connection", (socket) => {
    console.log(`Socket connected with id: ${socket.id}`)

    for(const file of eventFiles) {
        const event = require(path.join(__dirname, `/events/`, file))
        if(event.once){
            console.log(`Loaded event: ${event.name}`)
            socket.once(event.name, (args) => event.Callback(args, socket, io))
        }else {
            console.log(`Loaded event: ${event.name}`)
            socket.on(event.name, (args) => event.Callback(args, socket, io))
        }
    }

});

(async () => {
  await mongo().then(async (mongoose: { connection: { close: () => void; }; }) => {
    try{

        const b = await Server_Schema.find();
        for (const c of b) {
       
           global.Connections[c.UUID] = c

            }

    }finally{
        mongoose.connection.close()
    }
})
})()

app.use(function(req, res, next) {

    res.header(
 
      "Access-Control-Allow-Origin", "*"
   
    );
    next();
  });

app.post("/console", (req, res) => {
    console.log(req.data.message)
})

httpServer.listen(3000, () => {
    console.log(chalk.blue("[McL!nk]: ") + "Starting server on port 3000")
});