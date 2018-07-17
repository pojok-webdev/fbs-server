var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    db = require('./js/db.js'),
    lodash = require('lodash'),
    auth = require('./js/auth.js'),
    jwt = require('jsonwebtoken'),
    secretOrKey = 'padinet',
    users = [
        {
            id: 1,
            name: 'jonathanmh',
            password: '%2yx4',
            defaultRoute:'/fbs'
          },
          {
            id: 2,
            name: 'test',
            password: 'test',
            defaultRoute:'/fbs'
          },
        
        {
            id:3,
            name:'puji',
            password:'najma',
            defaultRoute:'/fbs'
        },
        {
            id:4,
            name:'nuria',
            password:'puji',
            defaultRoute:'/fbs'
        }
    ],
    query = require('./js/queries');

app.engine('html',require('ejs').renderFile)
app.set('views',path.join(__dirname,'views'))

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.static(__dirname+'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/testlogin',(req,res) => {
    email = req.body.email
    password = req.body.password
    console.log("QUERY",query.login({email:req.body.email}))
    db.executeQuery(query.login({email:req.body.email}),result=>{
        _result = result[0]
        lg = auth.login(_result,password)
        if(lg){
            var payload = {id:_result.id,name:_result.username,email:_result.email,defaultRoute:'/fbs'}
            var token = jwt.sign(payload,secretOrKey)
            console.log('token',token)
            res.send({message:'ok',token:token,defaultRoute:'/fbs'})
        }else{
            res.send({message:'auth error'})
        }
    })
})
app.post('/login',(req,res) => {
    if(req.body.name && req.body.password){
        var name = req.body.name,
            password = req.body.password
        console.log("Data Received",name,password)
    }
    var user = users[lodash.findIndex(users,{name:name})]
    if(!user){
        res.status(401).json({message:'User not found'})
    }else{
    if(user.password === password){
        var payload = {id:user.id,name:user.name,defaultRoute:user.defaultRoute} 
        var token = jwt.sign(payload, secretOrKey)
        console.log("Token",token)
        res.json({message:'ok',token:token,defaultRoute:user.defaultRoute})
    }else{
        res.status('401').json({message:'Password did not match'})
    }}
})
app.get('/islogin/:token', (req,res) => {
    verify = jwt.verify(req.params.token,secretOrKey,(err,data) => {
        if(!err){
            console.log("Verified",data)
            res.send(data)
        }else{
            console.log("Err",err)
            res.send(err)
        }
    })
})
app.get('/getlogin/:token',(req,res) => {
    decoded = jwt.decode(req.params.token,{complete:true})
    console.log("decoded",decoded)
    res.send(decoded)
})
app.get('/getfbs',(req,res)=>{
    db.executeQuery(query.getFbs(),result=>{
        console.log("getFb",result)
        res.send(result)
    })
})
app.get('/getfb/:nofb',(req,res)=>{
    db.executeQuery(query.getFb({nofb:req.params.nofb}),result=>{
        console.log("getFbs",result)
        res.send(result)
    })
})
app.post('/savefb',(req,res) => {
    db.executeQuery(query.saveFb(req.body),result=>{
        console.log("savefb",result)
        res.send(result)
    })
})
app.post('/updatefb',(req,res) => {
    console.log("Body Parser",req.body)
    console.log("Query",query.updateFb(req.body))
    db.executeQuery(query.updateFb(req.body),result=>{
        console.log("updatefb",result)
        res.send(result)
    })
})

app.get('/getpics/:nofb',(req,res)=>{
    db.executeQuery(query.getPics({nofb:req.params.nofb}),result=>{
        console.log("getpic",result)
        res.send(result)
    })
})
app.post('/getpic',(req,res)=>{
    db.executeQuery(query.getPic(req.body),result=>{
        console.log("getpic",result)
        res.send(result)
    })
})
app.post('/savepic',(req,res) => {
    db.executeQuery(query.savePic(req.body),result=>{
        console.log("savepic",result)
        res.send(result)
    })
})
app.post('/updatepic',(req,res) => {
    console.log("Body Parser",req.body)
    console.log("Query",query.updatePic(req.body))
    db.executeQuery(query.updatePic(req.body),result=>{
        console.log("updatepic",result)
        res.send(result)
    })
})
app.get('/getservices/:nofb',(req,res)=>{
    console.log("NOFB",req.params.nofb)
    db.executeQuery(query.getServices({nofb:req.params.nofb}),result=>{
        console.log("getservice",result)
        res.send(result)
    })
})
app.post('/getservice',(req,res)=>{
    db.executeQuery(query.getService(req.body),result=>{
        console.log("getservice",result)
        res.send(result)
    })
})
app.post('/saveservice',(req,res) => {
    db.executeQuery(query.saveService(req.body),result=>{
        console.log("saveservice",result)
        res.send(result)
    })
})
app.post('/updateservice',(req,res) => {
    console.log("Body Parser",req.body)
    console.log("Query",query.updateService(req.body))
    db.executeQuery(query.updatePic(req.body),result=>{
        console.log("updateservice",result)
        res.send(result)
    })
})
app.post('/getfees', (req,res) => {
    console.log("params",req.body)
    console.log("Query",query.getFees(req.body))
    db.executeQuery(query.getFees(req.body),result => {
        console.log("Get Fees Result", result)
        res.send(result)
    })
})
app.post('/getfee', (req,res) => {
    db.executeQuery(query.getFee(req.body),result => {
        console.log("Get Fee Result", result)
        res.send(result)
    })
})
app.post('/savefee', (req,res) => {
    db.executeQuery(query.saveFee(req.body), result => {
        console.log("Save Fee Result", result)
        res.send(result)
    })
})
app.post('/updatefee', (req,res) => {
    db.executeQuery(query.updateFee(req.body), result => {
        console.log("Update Fee Result", result)
        res.send(result)
    })
})
app.post('/removefee', (req,res) => {
    db.executeQuery(query.removeFee(req.body), result => {
        console.log("Remove Fee result",result)
        res.send(result)
    })
})
app.listen(process.env.PORT || 2000)