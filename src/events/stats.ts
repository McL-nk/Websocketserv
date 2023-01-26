import { Socket, Server } from "socket.io";
import { isObjectBindingPattern } from "typescript";


const mongo = require("../util/db/mongo")

module.exports = {
    name: "stats",
    once: false,
    Callback: async (args, socket: Socket, io: Server) => {
        if(global.dashConnections[args.UUID]){
         
            for(const socket of global.dashConnections[args.UUID].sockets){
             
                io.to(`${socket}`).emit("Stats", args.message)
            }
        }


    }
}

