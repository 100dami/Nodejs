# Node.js 로 server 열기

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

---

### HTTP 상태 코드
* 1xx (조건부 응답)
> 요청을 받았으며 작업을 계속한다.

* 2xx (성공)
> 이 클래스의 상태 코드는 클라이언트가 요청한 동작을 수신하여 이해했고 승낙했으며 성공적으로 처리했음을 가리킨다.

* 3xx (리다이렉션 완료)
> 클라이언트는 요청을 마치기 위해 추가 동작을 취해야 한다

* 4xx (요청 오류)
> 4xx 클래스의 상태 코드는 클라이언트에 오류가 있음을 나타낸다.

### Content-Type
**MIME 형식**
* text/plain : 기본적인 텍스트 
* text/html : HTML 
* text/css : CSS 
* text/xml : XML 
* image/jpeg : JPG/JPEG 
* image/png : PNG 
* video/mpeg : MPEG 비디오파일 
* audio/mp3 : MP3 
