// import shit
import * as mongoose from "mongoose"
const { mongoURI } = require("../json/mongo.json")

// mongoose options
mongoose.set("bufferCommands", true)

// connection shit
module.exports = async () => {

    await mongoose.connect(mongoURI, {
        connectTimeoutMS: 30000 ,
        keepAlive: true
    }).catch(error => console.log(error));

    return mongoose

}