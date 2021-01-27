const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const signup = async(req, res) => {
    const user = new User(req.body)
    try {
    await user.save()
    const token = createJWT(user)
    res.json({ token })
    }
    catch(err) {
    res.status(400).json(err)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) return res.status(401).json({err: 'bad credentials'})
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user)
                res.json({token})
            } else {
                return res.status(401).json({err: 'bad credentials'})
            }
        })
    } catch (err) {
        return res.status(401).json(err)
    }
}

const profile = async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username})
        const posts = await Post.find({user: user._id})
        console.log(posts, ' this post')
        res.status(200).json({posts: posts, user: user})
    }
    catch (err) {
        console.log(err)
        res.send({err})
    }
}

const createJWT = (user) => {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}

module.exports = {
    signup,
    login, 
    profile
}