const expres = require('express')
const cors = require('cors')

const app = expres()

const uploadImage = require('./routes/uploadImg')
const getAllObjects = require('./routes/getObjects')
const deleteObject = require("./routes/deleteObject")

app.use(cors())
app.use(uploadImage)
app.use(getAllObjects)
app.use(deleteObject)

app.listen(4040, console.log("your server is ready"))

