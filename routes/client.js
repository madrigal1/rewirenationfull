const express = require("express");
const router = express.Router();

router.get('/',(req,res)=> {
    res.render("index");
});

router.get('/sn',(req,res)=> {
    res.render("signupName");
});
router.get('/su',(req,res)=> {
    res.render("signupUsername");
});

router.get('/sp',(req,res)=> {
    res.render("signupPassword");
});
router.get('/se',(req,res)=> {
    res.render("signupEmail");
});
router.get('/li',(req,res)=> {
    res.render("login");
});

router.get('/mb',(req,res)=>{
    res.render("messageBoard");
});


module.exports = router;