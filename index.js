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
app.get('/getpic/:id',(req,res)=>{
    db.executeQuery(query.getFb({id:req.params.id}),result=>{
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

app.listen(process.env.PORT || 2000)