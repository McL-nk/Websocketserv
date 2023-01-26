import {Socket} from "socket.io"


module.exports = {
    name: "set_channel",
    once: false,
    Callback: (args, socket: Socket) => {
        console.log(args.UUID)
     
     global.Connections[args.UUID].Webhook = args.Webhook
 
    }
}
