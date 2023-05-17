module.exports = {

    // 订阅模板
    Subscribe: function (title, region, activity, sunday, date)
    {
        this.title = title;
        this.region = region;
        this.activity = activity;
        this.sunday = sunday;
        this.date = date;
    },
    // 用户构造数据模板
    UserData: function (uid, username, userphone, password, subscribers)
    {
        this.uid = uid;
        this.username = username;
        this.userphone = userphone;
        this.password = password;
        // 用户订阅
        this.subscribers = subscribers;
    }
}