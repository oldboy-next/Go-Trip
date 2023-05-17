const { query } = require('express');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/users', function (req, res, next)
{
  try
  {
    let { title, region, activity, day, date, userdata } = req.body;
    // console.log(title, region, activity, day, date, userphone);
    let [year, month, sunday] = date.split("-");
    let userData = userdata.split("&");

    res.render("users", {
      title: title,
      region: region,
      activity: activity,
      day: day,
      userphone: userData[0],
      username: userData[1],
      year: year,
      month: month,
      sunday: sunday
    });
  } catch (error)
  {
    console.log(error);
    req.render("error");
  }
});

router.get('/users', function (req, res, next)
{
  console.log(req.query);
  if (req.query.name === "" || !req.query.name)
  {
    res.render("login");
  }
  else
  {
    res.render("users", {
      title: "数据库未开发",
      region: "暂无",
      activity: "暂无",
      day: "暂无",
      userphone: req.query.phone,
      username: req.query.name,
      year: "2023",
      month: "5",
      sunday: "5"
    });
  }
});

module.exports = router;