const express = require('express');
const router = express.Router();

// 用户cookie
const userCookied = "userphone";

// 用户数据模板
const { Subscribe, UserData } = require("../model/UserDataModel");
// 数据库
const { db, key, uid } = require("../model/LinkData");

// 主页 post
router.post('/index', (request, response) =>
{
  response.clearCookie("isSubmit");
  response.clearCookie("def");

  let { userphone, password, username } = request.body;
  response.cookie(userCookied, userphone);

  let data = db.get(key).find({ userphone: userphone }).value();

  if (!data)
  {
    db.get(key).push(new UserData(uid, username, userphone, password, [])).write();
  }
  else
  {
    console.log(`欢迎用户${username}`);

    // 渲染
    response.render("index",
      {
        userphone: data.userphone,
        username: data.username,
        uid: data.uid
      });
  }

})

// 主页GET
router.get('/index', (request, response) =>
{
  response.clearCookie("isSubmit");
  response.clearCookie("def");

  let data = db.get(key).find({ userphone: request.cookies.userphone }).value();
  if (!data)
  {
    // 渲染
    response.render("index",
      {
        userphone: "Login",
        username: "",
        uid: 0
      });
  }
  else
  {
    // 渲染
    response.render("index",
      {
        userphone: data.userphone,
        username: data.username,
        uid: data.uid
      });
  }

})

module.exports = router;