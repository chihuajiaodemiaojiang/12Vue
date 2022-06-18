var express = require('express'); // 导入express模块
var router = express.Router(); // Router()是路由方法

// 导入数据库配置
let connection = require('./db/connection.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 登录接口
router.post('/user/login', (req, res) => {
  // req: 前端发送的参数 
  // 如果是post请求, 那么参数在req.body里面
  let { account, password } = req.body;
  console.log(account, password);
  if (!account || !password) {
    res.send({
      errno: 1,
      data: '登录失败,请检查用户名和密码'
    })
    return;
  }

  // 查询数据库
  let sql = `SELECT * FROM student WHERE account="${account}" AND password="${password}"`;
  connection.query(sql, function (error, results) {
    if (error) throw error; // 如果有报错, 就抛出异常, 并终止代码执行
    if (results.length === 1) { // 长度为1, 表示用户输入的信息是正确的
      // res: 后端响应给前端的数据
      res.send({
        errno: 0,
        data: '登录成功'
      })
    } else {
      res.send({
        errno: 1,
        data: '登录失败,请检查用户名和密码'
      })
    }
  });
})

// 注册接口
router.post('/user/register', (req, res) => {
  let { account, password, sex, tel, email } = req.body;
  if (account && password && sex && tel && email) {
    // 插入到数据库
    let sql = `INSERT INTO student(account, password, sex, tel, email) VALUES("${account}", "${password}", "${sex}", "${tel}", "${email}")`;
    connection.query(sql, function (error, results) {
      if (error) throw error;
      console.log('结果是', results);
      if (results.affectedRows === 1) {
        res.send({
          errno: 0,
          data: '注册成功'
        })
      } else {
        res.send({
          errno: 1,
          data: '注册失败, 请检查参数'
        })
      }
    })
  } else {
    res.send({
      errno: 1,
      data: '注册失败, 参数有误!'
    })
  }
})

// 学生列表接口
router.get('/user/stulist', (req, res) => {
  console.log('结果是:', req.query);

  // get请求, 参数在query里面
  let { page, count } = req.query;

  if (!page) {
    page = 1;
  }
  if (!count) {
    count = 3;
  }

  // 查询总条数
  let sumSql = `SELECT * FROM student`;
  let total = 0;
  connection.query(sumSql, function (error, results) {
    if (error) throw error;
    total = Math.ceil(results.length / count);
  })

  // 查询数据库
  let sql = `SELECT * FROM student LIMIT ${(page - 1) * count}, ${count}`;
  connection.query(sql, function (error, results) {
    if (error) throw error;
    res.send({
      errno: 0,
      msg: '获取学生列表成功',
      total,
      data: results
    })
  })
})


module.exports = router;
