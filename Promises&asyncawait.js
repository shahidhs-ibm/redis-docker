const {readFile,writeFile}=require('fs').promises
const util=require('util')

// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)





// const getdata=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err)
//             {
//               reject(err) //sends this err to catch
//             }
//             else
//             {
//                 resolve(data) // sends the data to then
//             }
//         })
//     })
// }


// getdata('./content/second.txt').then((result)=>console.log(result)).catch((err)=()=>console.log(err))

const start = async()=>{
    try {
        const first= await getdata('./content/first.txt')
        const second =await getdata('./content/second.txt')
        console.log(first,second)
    } catch (error) {
        console.log(err)
    }
}

const shurukaro = async()=>{
    try {
        const first= await readFile('./content/first.txt','utf8')
        const second= await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

//start()
shurukaro()