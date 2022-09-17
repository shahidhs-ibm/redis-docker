const express = require('express')
const app = express();
const axios = require('axios');
const Redis = require('redis');
const { json } = require('express');

const port = 8080

// const fetchApiData= async()=>{
//     const data=await axios.get('https://api.covidtracking.com/v1/states/current.json')
//     console.log("api req sned")
//     return dat
// }
const redisClinet = Redis.createClient(
  {
    host: process.env.REDIS_HOST,
    port: "6379",
  }
)


app.get('/', async (req, res) => {

  redisClinet.get('coronadata', async (err, cdata) => {
    if (err) console.error();
    if (cdata != null) {
      console.log("cache-hit")
      return res.json(JSON.parse(cdata))
    }
    else {
      console.log('cache-miss')
      const { data } = await axios.get("https://api.covidtracking.com/v1/states/current.json")
      redisClinet.setex('coronadata', 3600, JSON.stringify(data))
      res.json(data)
    }

  })

})

app.listen(port, () => {
  console.log(`App hfjhdfjfdjdfhj listening on port ${port}`);

})

process.on('SIGINT', function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(0);
});