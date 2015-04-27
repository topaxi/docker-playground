import express from 'express'
import morgan  from 'morgan'

let app = express()

app.use(morgan('combined'))

app.get('/api', (req, res) => {
  res.send(`Hello World ${process.env.TEST}!`)
})

let server = app.listen(3000, () => {
  let { port } = server.address()

  console.log(`Backend listening on port: ${port}`)
})
