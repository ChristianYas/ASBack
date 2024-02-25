

const router = require("express").Router()

const s3 = require("../AWS/connection")

router.delete("/deleteObject/:Key", (req,res) => {
    
    let {Key} = req.params

    let params = {Bucket: "backendimages2", Key}
    
    s3.deleteObject(params, (err, data) => {

        if(err) throw err

        res.status(200).send("img deleted")
    })
})

module.exports = router