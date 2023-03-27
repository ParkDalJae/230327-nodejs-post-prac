const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(`Received a POST request from ${name} (${email})`);
 
  // 전달할 데이터
  const data = {
    name: name,
    email: email,
    message: 'POST 요청이 성공적으로 처리되었습니다.'
  };

  // result.html 파일을 클라이언트 측으로 전송
  res.sendFile(__dirname + '/public/result.html', { data });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
