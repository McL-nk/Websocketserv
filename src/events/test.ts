import {Socket} from "socket.io"


module.exports = {
    name: "test",
    once: false,
    Callback: (args, socket: Socket) => {
        console.log(args)

        socket.emit("command", "stop")
    }
}
