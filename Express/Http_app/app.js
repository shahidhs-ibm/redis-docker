const http =require('http')
const {readFileSync}=require('fs')

const homepage =readFileSync('./Navbar-app/index.html')
const homeStyles = readFileSync('./Navbar-app/style.css')
const homeLogic = readFileSync('./Navbar-app/browser-app.js')
const server =http.createServer((req,res)=>{
    const url=req.url
    console.log(req.method)
    if(url==='/')
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    res.end()
    }
    else if(url ==='/style.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url ==='/about.html')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Me about </h1>')
        res.end()
    }
    else if(url ==='/browser-app.js')
    {
        res.writeHead(200,{'content-type':'text/javscript'})
        res.write(homeLogic)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
      }
})

server.listen(5000)