const express =require('express')
const app =express()
const {products}=require('./data')

app.get('/',(req,res)=>{
   res.send('<h1>Home pages</h1><a href="/api/products">Products</a>')

})

app.get('/api/products',(req,res)=>{
    const newproducts=products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image} 
    })

    res.json(newproducts)
})

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params)
    const {productID}=req.params//destructing
    console.log(productID)
    const singleproduct=products.find((x)=>x.id===Number(productID))
    res.json(singleproduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })

  app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
  
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })


app.listen(5000,(req,res)=>{
     console.log('server is listening to port 5000...')
})