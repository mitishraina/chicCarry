const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === "development"){
    router.post("/create", async function(req,res) {
        let owners = await ownerModel.find();
        if(owners.length > 0) 
            {return res
                .status(503)
                .send("YOU DON'T HAVE PERMISSION TO CREATE A NEW OWNER")
            }
            let {fullname, email, password} = req.body;
            let createdOwner = await ownerModel.create({
                fullname,
                email,
                password,
            });
            res.status(201).send(createdOwner);
    })
}

router.get("/", function(req, res) {
    res.send("hey its working owners:)");
})


module.exports = router;