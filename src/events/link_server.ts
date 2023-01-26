import { Socket } from "socket.io";


const mongo = require("../util/db/mongo")

module.exports = {
    name: "link_server",
    once: false,
    Callback: async (args, socket: Socket) => {
      console.log(args)
      console.log("link server")
        if(global.dashConnections[args] == null){
          global.dashConnections[args] = {sockets: []}
        }
     
        if(global.dashConnections[args].sockets.includes(socket.id)) return
        global.dashConnections[args].sockets.push(socket.id)
     

    }
}

