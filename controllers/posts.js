

const create = (req, res) => {
    try {

            const post = await Post.create({caption: req.body.caption, user: req.user});

            console.log(post)
            res.status(201).json({post: post})
        }


    } catch(err){
        console.log(err)
        res.json({data: err})
    }










module.exports = {
    create, 
    index
}