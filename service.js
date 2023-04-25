const express = require('express')
const router = express.Router()
const arrayOfLength = 8
router.get('/', (request, response) => {
    response.send(`the page`)
})

router.get('/newUser', (request, response) => {
    response.send(`the new`)
})

router.route('/:id')
    .get((request, response) => {
        const userId = Number(request.params.id)
        if (userId < arrayOfLength) {
            response.send(` ${request.service.name}`)
        }
        else{
            response.send('Invalid NUmber!')
        }
    })
// .put((request,response)=>{
//     response.send(`GET method on  user page with id ${request.params.id}`)

// })
// .delete((request,response)=>{
//     response.send(`GET method on  user page with id ${request.params.id}`)
// })

const users = [
    {
        name: 'MERN full stack'
    },
    {
        name: 'Mobile Application Development'
    },
    {
        name: 'Computer Networks'
    },
    {
        name: 'Operating System'
    },
    {
        name: 'Artificial Intelligence'
    },
    {
        name: 'Machine Learning'
    },
    {
        name: 'Database Mangement System'
    },
]

router.param('id', (request, response, next, id) => {
    request.service = users[id]
    next()
})
module.exports = router