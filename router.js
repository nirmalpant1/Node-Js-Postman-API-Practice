import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router = express.Router()

let users = []

// Get

router.get('/', (req, res) =>{
   // res.send('Welcome to the user page')
   res.send(users)
})

//Post

router.post('/', (req, res) =>{
    const user = req.body
    const userFormat = {...user, id: uuidv4()}
    users.push(userFormat)
    res.send('Successfully Posted')
})

// Get data from specific parameter

router.get('/:id', (req,res) =>{
    const {id}  = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser) 
})

// Delete

router.delete('/:id', (req,res) =>{
    const {id} = req.params

    // filter checks if false return that should be removed from the database successfully

    users = users.filter((user) => user.id !== id)
    res.send(`Member with id: ${id} got deleted from the database successfully.`)
})


//Patch

router.patch('/:id', (req, res) =>{
    const {id} = req.params
    const {name, age} =req.body
    const getUser = users.find((user) => user.id === id)
    if(name){
        getUser.name = name
         }
    if(age){
        getUser.age = age
    }
    res.send(`Member with id ${id} got updated`)
})

export default router