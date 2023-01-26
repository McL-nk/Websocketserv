import {Socket} from "socket.io"


module.exports = {
    name: "setup",
    once: false,
    Callback: (args, socket: Socket) => {
        console.log(args.UUID)
   
     global.Connections[args.UUID].ChannelId = args.ChannelId
    
    }
}
