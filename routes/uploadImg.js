const router = require("express").Router()
const multer = require('multer')()
const fs = require('fs')

const s3 = require("../AWS/connection")

router.post("/addImg", multer.single('image'), (req,res) => {

    const {originalname, buffer, mimetype } = req.file

    const paramsSnap = {
        Bucket: 'backendimages2',
        Key: originalname,
        Body: buffer, 
        ContentType: mimetype, 
        ACL: 'public-read', 
    }

    s3.upload(paramsSnap, (err, data) => {
        if (err) {
            console.log('error in callback', err);
            res.status(500).send(err); 
        } else {
            
            res.send('new image has been uploaded');
        }
    });
})

module.exports = router