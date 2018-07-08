var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    db = require('./js/db.js'),
    query = require('./js/queries')
app.engine('html',require('ejs').renderFile)
app.set('views',path.join(__dirname,'views'))
app.use(express.static(__dirname+'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/getfbs',(req,res)=>{
    db.executeQuery(query.getFbs(),result=>{
        console.log("getFb",result)
        res.send(result)
    })
})
app.get('/getfb/:id',(req,res)=>{
    db.executeQuery(query.getFb({id:req.params.id}),result=>{
        console.log("getFbs",result)
        res.send(result)
    })
})
app.post('/savefb',(req,res) => {
    db.executeQuery(query.saveFb(req.bodyParser),result=>{
        console.log("savefb",result)
        res.send(result)
    })
})
app.post('/updatefb',(req,res) => {
    db.executeQuery(query.saveFb(req.req.bodyParser),result=>{
        console.log("savefb",result)
        res.send(result)
    })
})
app.listen(process.env.PORT || 2000)