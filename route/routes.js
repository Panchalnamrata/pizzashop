var express = require ("express");
var router = express.Router();

const Pizza = require('../model/pizzaItem');

//retrieve data from db:
router.get('/pizzas',(req,resp)=>{
    Pizza.find((err,data)=>{
        if (err){
            resp.json(err);
        }else{
            resp.json(data);
        }
    });
});

//insert new data from UI
router.post('/pizza',(req,resp)=>{
   let newPizzaItem = new Pizza({
       pizzaName: req.body.pizzaName,     //to insert the data
       Price: req.body.Price
   });
   newPizzaItem.save((err,data)=>{
    if(err){
        resp.json(err);
    }else{
        resp.json("Pizza added to cart");
    }
   });

});

//updatng data using id
router.put('/updatepizza/:id',(req,resp)=>{
    
    Pizza.findOneAndUpdate({_id:req.params.id},{
        $set:{
            pizzaName: req.body.pizzaName,   //to update the newly inserted or updated data
             Price: req.body.Price
        }
        
    },
    function(err,data){
        if(err){
            resp.json(err);
        }else{
            resp.json(data);
        }
    });
});

//delete data using id
router.delete('/deletepizza/:id',(req,resp)=>{
    Pizza.remove({_id:req.params.id},(err,data)=>{
        if(err){
            resp.send(err);
        }else{
            resp.send(data);
        }
    });
});




//used to add all routes with resp to operations:
module.exports=router;