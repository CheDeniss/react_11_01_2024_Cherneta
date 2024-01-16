const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors({
    origin:'http://localhost:5173'
}))

app.use(express.json())

app.post('/submit', (req,res) => {console.log("reseived", req.body);
res.status(200).send('Request OK')})

app.listen(port, () => {console.log(`server listen on ${port}`)})