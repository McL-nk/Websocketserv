import { Socket } from "socket.io";
import Server_Schema from "../util/db/schemas/Server_Schema";

import mongo = require("../util/db/mongo");

module.exports = {
    name: "bot_connect",
    once: true,
    Callback: async (args, socket: Socket) => {
        global.BotConnections[`${args}`] = socket.id
    }
}



