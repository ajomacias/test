const express = require('express')


const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>hola desde mi servidor remoto</h1>')
})

app.listen(3000);

console.log('server on port 3000')