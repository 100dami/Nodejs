## egoing's Node.js 영상을 보고 공부하는 repository (￣o￣) . z Z

## DB 와 Nodejs 연결
``` js
var db = mysql.createConnection({ // DB 접속 정보를 담음
    host: "localhost",
    user: "root",
    password: "0223",
    database: "first" // database 위치 지정
});

// connect 메서드를 이용 : DB 접속
db.connect();
```
## db.query() ?
> 구조는 .query(쿼리문, 콜백함수), 쿼리문을 실행함
``` js
db.query(`SELECT * FROM topic`, function (error, topics) {
                .
                .
                response.writeHead(200);
                response.end(html);
            });
```
## request.on('data', ...) ?
> 데이터가 들어오면 데이터를 body 변수에 저장
``` js
request.on('data', function (data) {
            body = body + data;
        });
```

##  request.on('end', ...) ?
> 데이터가 들어오지 않는다면 end 이벤트, **req.on('end'...)** 이 실행 됨
``` js
  request.on('end', function () {
            var post = qs.parse(body);
            db.query(`
              INSERT INTO topic (title, description, created, author_id) 
                VALUES(?, ?, NOW(), ?)`,
                [post.title, post.description, 1],
                .
                .
            )
        });
```

## result.insertID
> db에 입력 후 삽입된 데이터의 id 값 가져옴
``` js
 response.writeHead(302, { Location: `/?id=${result.insertId}` });
 response.end();
 }
```
