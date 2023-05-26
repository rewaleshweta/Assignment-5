var http = require("http");
const PORT = 8081;

/*function handleServer(req, res)*/
const httpServer = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("hello")
    }

    if (req.url === '/Welcome') {

        res.writeHead(200, { "Content-Type": "text/plain" })
        res.write(' Welcome to Dominos!');
        res.end();
    }

    else if (req.url === '/Contact') {
        res.writeHead(200, { "Content-Type": "application/json" })
        //res.write(obj);
        const obj = {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.write(' page not found');
        res.end();
    }
})

httpServer.listen(PORT, () => {
    console.log("server run on 8081")
})
module.exports = httpServer;