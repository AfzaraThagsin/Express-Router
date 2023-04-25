const express =require('express')
const router=express.Router()

let listofservices=[
    {
        "id":1,
        "Name":"Web Appliaction Development"

    },
    {
        "id":2,
        "Name":"Cloud Computing"

    },
    {
        "id":3,
        "Name":"Data Science"

    
    }

]
router.get('/',(request,response)=>{
    response.send("Welcome")
})
router.get('/:id',(request,response)=>{
    const routerId=Number(request.params.id)
    const getRouter=listofservices.find((router)=>router.id===routerId)
    if(!getRouter)
    {
        response.status(500).send("Expected service not found")
        console.log(request.params.id);
    }
    else
    {
        response.json(getRouter)
    }
    
})
module.exports=router