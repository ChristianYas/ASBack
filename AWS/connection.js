

const AWS = require("aws-sdk")

AWS.config.update({
    accessKeyId: 'AKIATCKARFURL534BRXR',
    secretAccessKey: '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',
    region: "us-east-1" 
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

module.exports = s3