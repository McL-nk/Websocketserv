import {  Server, Socket } from "socket.io";
import Server_Schema from "../util/db/schemas/Server_Schema";

const mongo = require("../util/db/mongo")

module.exports = {
    name: "Discord_Chat",
    once: false,
    Callback: async (args, socket: Socket, io: Server) => {
    Server_Schema.findOne({})
    const socketid = global.Connections[args.UUID] ? global.Connections[args.UUID].SocketID : null
    if(!socketid){
   
        socket.emit("error", true)
        return
    }
    
 
    socket.emit("executed", true)
    io.to(socketid).emit("chat", args.command)
    }
}

