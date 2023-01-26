import { Socket } from "socket.io";
import Server_Schema from "../util/db/schemas/Server_Schema";

const mongo = require("../util/db/mongo")

module.exports = {
    name: "Connect",
    once: true,
    Callback: async (args, socket: Socket) => {
      console.log("connect")
      console.log(args)
                global.serverConnections[args.UUID] = {
                  "SocketID": socket.id,
                   "ServerUUID": args.UUID,
                }
           
    }
}

