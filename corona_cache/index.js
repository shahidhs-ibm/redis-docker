const express =require('express')
const app = express();
const axios=require('axios');
const Redis =require('redis');
const { json } = require('express');

const port=process.env.PORT || 3000

// const fetchApiData= async()=>{
//     const data=await axios.get('https://api.covidtracking.com/v1/states/current.json')
//     console.log("api req sned")
//     return data
// }

const redisClinet=Redis.createClient()
app.get('/coronadata',async(req,res)=>{
  
  redisClinet.get('coronadata',async(err,cdata)=>{
    if(err) console.error();
    if(cdata!=null)
    {
        console.log("cache-hit")
        return res.json(JSON.parse(cdata))
    }
    else
    {
        console.log('cache-miss')
        const {data}=await axios.get("https://api.covidtracking.com/v1/states/current.json")
        redisClinet.setex('coronadata',3600,JSON.stringify(data))
        res.json(data)
    }

  })
    
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})