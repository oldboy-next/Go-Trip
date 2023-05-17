const express = require('express');
const router = express.Router();

// 登录界面
router.get('/login', (request, response) =>
{
    response.render("login");
});
// 登录功能
router.post("/login", (request, response) =>
{
    console.log(request.body);
    response.render("success", { query: request.body });
});

module.exports = router;