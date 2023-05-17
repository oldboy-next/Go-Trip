const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/index', (req, res) =>
{
  try
  {
    if (req.query.name === "" || !req.query.name)
    {
      res.render('index', { userphone: "Login", username: "" });
    }
    else
    {
      res.render('index', { userphone: req.query.phone, username: req.query.name });
    }
  } catch (error)
  {
    console.log(error);
    res.render("error");
  }
});

router.post('/index', (req, res) =>
{
  try
  {
    // 获取用户名手机号
    let name = req.body.username.trim();
    let phone = req.body.userphone;
    res.render('index', { userphone: phone, username: name });
  } catch (error)
  {
    console.log(error);
    res.render("error");
  }
});

module.exports = router;