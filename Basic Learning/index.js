import express from 'express'
import 'dotenv/config'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/myname', (req, res) => {
  res.send('<h1>Abhishek Jain! </h1>')
})

app.get('/jokes', (req , res) =>{
  const jokes = [{
    id: 1,
    joke : "first joke"
  },
  {
    id : 2,
    joke : "second joke"
  }]
  res.send(jokes)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})