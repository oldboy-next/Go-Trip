// 导入 lowdb 模块
const low = require("lowdb");
const path = require("path");

// 创建配置
const FileSync = require("lowdb/adapters/FileSync");
const person = new FileSync(path.resolve(__dirname, "../public/data/database.json"));
const db = low(person);

// 键
const key = "users";

module.exports = {
    db: db,
    key: key,
    uid: 10000 + db.get(key).size().value()
}