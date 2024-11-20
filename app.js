const http = require('http');
const fs = require('fs');

const port = 19153;
const reqHand = (req, res)=>{
    let filePath = "";
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/about':
            filePath = './about.html'
            break;
        case '/product':
            filePath = './product.html'
            break;
        case '/contact':
            filePath = './contact.html'
            break;
        default:
            filePath = './error.html'
            break;
    }
    let data = fs.readFileSync(filePath);
    res.end(data);
}
const server = http.createServer(reqHand);     // create a new server

server.listen(port, (err)=>{
    if(err){
        console.log(`Server is not start: ${err}` );
        return false;
    }
    console.log(`Server start at http://localhost:${port}`);
});
