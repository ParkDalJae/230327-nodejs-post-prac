const http = require("http");
const fs = require("fs");
const app = http.createServer((request, response) => {
  const _url = request.url;
  console.log(_url)
  const fullUrl = new URL("http://localhost:3000" + _url);
  console.log(fullUrl)
  const pathName = fullUrl.pathname;
  console.log(pathName)

  if (pathName === "/") {
    fs.readFile("./data/html", (err, data) => {
      console.log("1.비동기입니다~")
      response.writeHead(200, { "Content-Type": "text/html;charset = utf-8" });
      response.end(data);
    });
  }
  console.log("2.비동기입니다~")
});

app.listen(3000, () => {
  //포트번호 3000으로 서버 구동
  console.log("서버 시작 주소: http:localhost:3000");
});