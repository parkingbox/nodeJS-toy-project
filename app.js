// const express = require("express");

// const app = express();
// //미들웨어 등록
// //express는 모든 요청을 여러개의 미들웨어 함수를 통해 수신 한다
// app.use((req, res, next) => {
//   let body = "";
//   req.on("end", () => {
//     const userName = body.split("=")[1];
//     if (userName) {
//       req.body = { name: userName };
//     }
//     next();
//   });
//   req.on("data", (chunk) => {
//     body += chunk;
//   });
// });

// app.use((req, res, next) => {
//   if (req.body) {
//     return res.send("<h1>USER:" + req.body.name + "</h1>");
//   }
//   res.send(
//     '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button>'
//   );
// });

// app.listen(5000);


//서버 재시작 문제 해결

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
  res.send('<h1>User: ' + req.body.username + '</h1>');
});

app.get('/', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
