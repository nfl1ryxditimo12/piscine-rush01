const { json } = require('express');
var express = require('express');
const router  = express.Router();
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require ('../middlewares/authMiddlewares')


//안증 페이지로 전달
router.get('/', passport.authenticate('42')); 


//인증하면 인증코드를 콜백유알엘로 받음
router.get('/authResult',
    passport.authenticate('42',
    {failureRedirect: '/login/fail'}),
    (req, res)=>{
        // console.log(req.users);
        res.render('result');
    }
)

router.get('/test',isLoggedIn,(req,res)=>{
    res.json(123);
})

module.exports = router;