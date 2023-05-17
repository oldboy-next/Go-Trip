const express = require('express');
const router = express.Router();

// 用户数据模板
const { Subscribe, UserData } = require("../model/UserDataModel");
// 数据库
const { db, key, uid } = require("../model/LinkData");

// 用户界面GET
router.get('/users', function (request, response, next)
{
  response.clearCookie("def");
  let data = db.get(key).find({ userphone: request.cookies.userphone }).value();

  if (!data)
  {
    response.redirect("/login");
  }
  else
  {
    //渲染
    response.render("users", {
      subscribers: data.subscribers,
      userphone: data.userphone,
      username: data.username,
      uid: data.uid
    });
  }
});

// 获取数据
router.post('/users', function (request, response, next)
{
  response.cookie("isSubmit", true);
  response.clearCookie("def");

  // 获取用户
  let user = db.get(key).find({ userphone: request.cookies.userphone }).value();

  if (request.cookies.isSubmit)
  {
    //渲染
    response.render("users", {
      subscribers: user.subscribers,
      userphone: user.userphone,
      username: user.username,
      uid: user.uid
    });
  }
  else
  {
    user.subscribers.push({ ...request.body });
    // 更新数据
    db.get(key).find({ userphone: request.cookies.userphone }).assign({
      subscribers: user.subscribers
    }).write();

    // console.log("user", user);
    //渲染
    response.render("users", {
      subscribers: user.subscribers,
      userphone: user.userphone,
      username: user.username,
      uid: user.uid
    });
  }
});

// 删除数据
router.get('/users/del', function (request, response, next)
{
  response.cookie("def", true);

  let data = db.get(key).find({ userphone: request.cookies.userphone }).value();
  if (!data)
  {
    response.redirect("/login");
  }

  if (!request.cookies.def)
  {
    let temp = data.subscribers.splice(parseInt(request.query.i), 1);

    if (temp.length === 0)
    {
      response.render("success", { code: 300, message: "数据已经被删除" });
    }

    // 更新数据
    db.get(key).find({ userphone: request.cookies.userphone }).assign({
      subscribers: data.subscribers
    }).write();
  }

  response.render("success", {
    code: 200,
    message: `< 删除第 ${Number(request.query.i) + 1} 个>`
  });


});

module.exports = router;