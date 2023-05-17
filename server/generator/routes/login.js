const express = require('express');
const router = express.Router();

// 登录界面
router.get('/login', (request, response) =>
{
    response.clearCookie("isSubmit");
    response.clearCookie("def");

    if (request.cookies.userphone)
    {
        response.clearCookie("userphone");
    }
    response.render("login");
});


module.exports = router;