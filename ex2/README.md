# Node.js server 열어보기

## 기본적인 Node.js 서버 생성 코드
``` js
require('http').createServer(function(request, response){
response.writeHead(200,{'content-type':'text/html'});
response.end('<h1>hello world</h1>');
}).listen(200);
```

### require(" ~ ") ?
``` require 메서드를 통해 외부 모듈을 가져올 수 있음 ```     
>
"http" 모듈 ?
> Node.js에서 ``` 가장 기본적인 웹 모듈 ``` 
HTTP 웹 서버를 생성하는 것과 관련된 모든 기능을 담당함

## .createServer() ?
``` 사용자의 컴퓨터에 서버를 생성하게 해주는 method ```

