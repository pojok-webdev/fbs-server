var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    db = require('./js/db.js'),
    query = require('./js/queries')
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