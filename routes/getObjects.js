

const router = require("express").Router()
const s3 = require("../AWS/connection")

const params = {Bucket: "backendimages2"}

router.get('/getAllObj', (req, res) => {

    let arrayObjects = []

    s3.listObjectsV2(params, (err, data) => {

        if(err) throw err
        
        data.Contents.forEach(obj => {

            let urlObj = s3.getSignedUrl('getObject', {Bucket: params.Bucket, Key: obj.Key})
            obj.url = urlObj
            
            arrayObjects.push(obj)
        })

        res.send(arrayObjects)
    })
    
})

module.exports = router