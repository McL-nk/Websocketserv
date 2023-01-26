import axios from "axios"
import {Socket} from "socket.io"
import { WebhookClient, MessageEmbed} from "discord.js"
import Server_Schema from "../util/db/schemas/Server_Schema"
const mongo = require("../util/db/mongo")
module.exports = {
    name: "Player_Chat",
    once: false,
    Callback: async (args, socket: Socket) => {
      console.log(args)
      await mongo().then(() => {
        console.log(args.UUID)
          Server_Schema.findOne({UUID: args.UUID}).then(server => {
            console.log(server)
        if(server){
          console.log(server)
          if(server.webhook){
            console.log(server.webhook)
            console.log(args.message.Message)
            let json = {
              "username": `${args.message.Player_Name}`,
              "avatar_url": `https://minotar.net/bust/${args.message.Player_UUID}/100.png`,
              "content": `${args.message.Message}`
            }
            axios.post(server.webhook, json)
          }
        }
      })
      })
    
    }
}