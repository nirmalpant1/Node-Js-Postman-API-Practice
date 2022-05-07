import express from 'express';
import bodyParser from 'body-parser'
import routerPage from './router.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use('/users', routerPage)

app.get('/', (req, res) =>{
    res.send('Welcome to the API')
})

app.listen(PORT, () =>{
console.log(`Server Successfully running on PORT:${PORT}`)
}
)