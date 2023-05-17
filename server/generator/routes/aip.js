const express = require('express');
const router = express.Router();

// 数据库
const { db, key, uid } = require("../model/LinkData");

// 数据接口
router.get("/api/login", (request, response) =>
{
    let user = db.get(key).find({ userphone: request.query.up }).value();
    if (user)
    {
        response.json({
            code: 200,
            message: "用户已存在",
            data: user
        })
    }
    else
    {
        response.json({
            code: 400,
            message: "用户不存在",
            data: null
        })
    }
})

module.exports = router;