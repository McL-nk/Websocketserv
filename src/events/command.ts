import {  Server, Socket } from "socket.io";
import Server_Schema from "../util/db/schemas/Server_Schema";

const mongo = require("../util/db/mongo")

module.exports = {
    name: "command",
    once: false,
    Callback: async (args, socket: Socket, io: Server) => {
 
    const socketid = global.serverConnections[args.UUID] ? global.serverConnections[args.UUID].SocketID : null
   
    if(!socketid){
   
        socket.emit("error", true)
        return
    }
    
 
    socket.emit("executed", true)
    io.to(socketid).emit("command", args.command)
    }
}

