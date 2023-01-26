import axios from "axios"
import {Socket} from "socket.io"
import Server_Schema from "../util/db/schemas/Server_Schema"
const mongo = require("../util/db/mongo")
module.exports = {
    name: "Player_Acheivement",
    once: true,
    Callback: async (args, socket: Socket) => {
      console.log(args)
      await mongo().then(() => {
         Server_Schema.findOne({UUID: args.UUID}).then(server => {
        if(server){
          if(server.webhook){
            console.log(args.message.Player_Name)
            let json = {
              "username": "McLink",
              "content": `${args.message.Player_Name} got a acheivement!`
              
            }
            axios.post(server.webhook, json)
          }
        }
      })
      })
     
    }
}