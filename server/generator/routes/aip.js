const { response } = require('express');
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
});

// 获取昵称
router.get("/api/name", (request, response) =>
{

    if (!request.query.name)
    {
        response.json({
            code: 404,
            data: null,
            message: "没有你找的数据"
        });
    }

    let user = db.get(key).find({ username: request.query.name }).value();

    if (user)
    {
        response.json({
            code: 200,
            data: false,
            message: "此昵称已经被注册"
        });
    }
    else
    {
        response.json({
            code: 200,
            data: true,
            message: "此昵称未注册"
        });
    }
})

module.exports = router;