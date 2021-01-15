var http = require('http');
var fs = require('fs');
var url = require("url");

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // ? 뒤에 부분을 가져오게 하는 parse()
    var pathname = url.parse(_url, true).pathname;
    var title = (queryData.id);

    console.log(queryData.id); // id 출력

    //console.log(url.parse(_url, true));
    // if (_url == '/') {
    //     title = "Welcome"; // url 부분이 / 이면 html title 을 "Welcome" 으로 바꿈
    // }
    // if (_url == '/favicon.ico') {
    //     response.writeHead(404);
    //     response.end();
    //     return;
    // }

    if (pathname === "/") {
        fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {

            // template literal : " ` `" , " ${} "
            var template = `        
                    <!doctype html>
                <html>
                <head>
                <title>WEB1 -${title}</title>
                <meta charset="utf-8">
                </head>
                <body>
                <h1><a href="/">WEB</a></h1>
                <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ol>
                <h2>${title}</h2>
                <p>${description}</p>
                </body>
                </html> 
                `;
            response.writeHead(200);
            // response.write("Hi Dami\n");
            response.end(template); // 서버에 template 를 보여줌
        });
    } else {
        response.writeHead(404);
        response.end("Not Found");
    }

});
app.listen(3000);