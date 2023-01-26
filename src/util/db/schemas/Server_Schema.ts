import { Schema, Document, model , ObjectId} from "mongoose"

export interface IServer extends Document {
    name: string,
    
     UUID: string,
     webhook: string,
     ChannelID: string,
     Events: {
      player_join: Boolean,
      player_leave: Boolean,
      player_death: Boolean,
      player_chat: Boolean,
      player_advancement: Boolean,
     },
    
}

const Server: Schema = new Schema({
    name: {
        type: String,
        required: true
      },
     UUID: {
       type: String,
       default: " "
     },
     webhook: {
      type: String, 
      default: " "
     },
     ChannelID: {
      type: String, 
      default: " "
     },
     Events: {
      player_join: {
        type: Boolean,
        default: true
      },
      player_leave: {
        type: Boolean,
        default: true
      },
      player_death: {
        type: Boolean,
        default: true
      },
      player_chat: {
        type: Boolean,
        default: true
      },
      player_advancement: {
        type: Boolean,
        default: true
      },
     },
    
     
})

export default model("Server", Server)
