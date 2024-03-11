const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/test", (req, res, next) => {
    try{
        res.send({status:200, note:"Test completed successfully"});
    }
    catch(error){
        next(error);
    }
})

module.exports = userRouter;