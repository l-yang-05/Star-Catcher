const router = require("express").Router()
const Products = require('../models/products.js')
const Users = require('../models/users.js')
const Bid = require('../models/bids.js')
const EndBid = require('../models/endbid.js')
const StartBid = require('../models/startbid.js')
const bcrypt = require('bcrypt')
const Joi = require('joi')

const validateUser = (user) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        user_name: Joi.string().min(5).max(300).require(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema)
}
const validate = (user) => {
    const schema = {
        user_name: Joi.string().min(5).max(300).require(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema)
}


router.get('/', (req, res) => {
    res.send('welcome to the api')
})

//gets products from database
router.get('/products', async (req, res) => {
    try {
        const products = await Products.find().limit(10)
        res.send(products)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})


router.get('/starting_soon', async(req, res) => {
    let date = new Date()
    try{
       const time = await StartBid.find({start_time: {$gte : date}});
       res.json(time);
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }  
})
router.get('/ending_soon', async(req, res) => {
    let date = new Date()
    try{
       const time = await EndBid.find({end_time: {$gte : date}});
       res.json(time);
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }  
})

router.get('/products/filter/:galaxy', async (req, res) => {
    const galaxy = req.params.galaxy;
    const ANY = "any";
    if(galaxy !== ANY){
        try {
            const products = await Products.find({galaxy: `${galaxy}`}).limit(10)
            res.json(products)
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
})

router.get('/user/:username', async (req, res) => {
    const username = req.params.username
    try {
        const user = await Users.find({user_name: username})
        const userData = res.json(user)
        res.status(200).send(userData)

    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/products/bid', async (req, res) => {
    const newbid = req.body.bid;
    const id = req.body.id
    try{
        const products = await Bid.update({_id: id}, {$max: {bid: newbid}})
        
    }catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/user/signup', async (req, res) => {
    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let user = await user.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered');

    user = new User({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.salt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    res.status(200).send(true)
})

router.post('/user/login', async (req, res) => {
    const { error } = validate(req.body)
    if(error) return res.status(400).send("Invalid username or password")
    
    let user = await User.findOne({user_name: req.body.user_name})
    if(!user) return res.status(400).send('Invalid email or password')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send("Invalid username or password")

    res.status(200).send(true)
})


module.exports = router;