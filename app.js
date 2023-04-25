const express = require('express')
const app=express()
const home=require('./Home.js')
const contact=require('./Conatct.js')
const about=require('./about.js')
const team=require('./team.js')
const service=require('./service.js')


app.get('/',(request,response)=>{
    response.send("Website")
})
app.use('/home',home)
app.use('/contact',contact)
app.use('/about',about)
app.use('/team',team)
app.use('/service',service)
app.listen(3600)