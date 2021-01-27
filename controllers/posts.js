const S3 = require('aws-sdk/clients/s3')
const { v4: uuid } = require('uuid')

const s3 = new S3()

const create = (req, res) => {
    try {
        const filePath = `${uuidv4()}/${req.file.origialname}`
        const params = {Bucket: 'insert new bucketname here', Key: filePath, Body: req.file.buffer}
        s3.upload(params, async function(err, data){

            const post = await Post.create({caption: req.body.caption, user: req.user, photoUrl: data.Location});

            console.log(post)
            res.status(201).json({post: post})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}









module.exports = {
    create, 
    index
}