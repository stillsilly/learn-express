var express = require('express');
var app = express();

app.use(express.static('public')); 
//使用 express.static 中间件来设置静态文件路径

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

//在命令行里运行这个文件 node express-demo3.js
//然后可以打开浏览器，访问 http://localhost:8081/image/hellokitty.png 看到图片
