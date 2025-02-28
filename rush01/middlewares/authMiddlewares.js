exports.isLoggedIn = (req, res, next) =>{  //isAuthenticated 함수는 로그인 중이면 true를 반환 그렇지 않으면 false
    if (req.isAuthenticated()){
        next();
    }else{
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()){
        next();
    } else{
        const message = encodeURIComponent('로그인한 상태입니다');
        res.redirect(`/?error=${message}`);
    }
}