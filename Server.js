const express = require('express')
const path = require('path')

const server = express()

//server.use(express.static('./public'))

////server.get('/', (req, res) => {
 //   res.sendFile(path.resolve(__dirname, './login.html'))})
server.get('/', (req,res)=>{res.status(200).send('./login.html','./login.css')})




server.listen(5000,()=>{console.log('server is running');})