import {Socket} from "socket.io"
import Server_Schema from "../util/db/schemas/Server_Schema"
module.exports = {
    name: "Player_Leave",
    once: true,
    Callback: async (args, socket: Socket) => {
      console.log(args)
    }
}