# Node.js server 열어보기

## 기본적인 Node.js 서버 생성 코드
``` js
require('http').createServer(function(request, response){
response.writeHead(200,{'content-type':'text/html'});
response.end('<h1>hello world</h1>');
}).listen(200);
```

### require(" ~ ") ?
require 메서드를 통해 ``` 외부 모듈 ``` 을 가져올 수 있음       
>
' http ' 모듈 ?
> Node.js에서 ``` 가장 기본적인 웹 모듈 ``` <br>
HTTP 웹 서버를 생성하는 것과 관련된 모든 기능을 담당함 <br>

### .createServer() ?
사용자의 컴퓨터에 ``` 서버를 생성 ```하게 해주는 method  <br>  

### function(request, response) { } ?
> 클라이언트의 요청을 처리하기 위한 함수<br>

### response.writeHead(200, {"Content-Type" : "text/plain"}); ?
>  ``` 응답 헤더 ``` 를 작성하는 method <br>
첫번째 인자는 ``` 상태 코드``` (ex : 200, 403, 404) 를 지정하고,  두번째 인수에 ``` 헤더 정보 ``` 를 연관 배열로 정리함 <br>
``` "Content-Type" : "text/plain" :  "이 콘텐츠는 표준 텍스트이다" 를 의미 ``` <br>

###  response.end("Hello World\n"); ?
> ``` 응답 본문 ``` 을 작성하는 method <br>
내용 내보내기가 완료되면, 이 method 를 호출해 콘텐츠 출력을 완료함 <br>
이 코드에 따르면 ``` Hello World ``` 가 출력 됨

### .listen(8081); ?
> () 안 숫자, ``` 8081 port ``` 에서 서버를 실행함 -> <br>
 ``` localhost:8081 ``` 에서 확인 가능 <br>

