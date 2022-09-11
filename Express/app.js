const http =require('http')
const {readFileSync}=require('fs')

const homepage =readFileSync('.Express/Http_app/Navbar-app/index.html')
const homeStyles = readFileSync('.Express/Http_app/Navbar-app/style.css')
const homeLogic = readFileSync('.Express/Http_app/Navbar-app/browser-app.js')
const server =http.createServer((req,res)=>{
    const url=req.url
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