const apng2gif = require("apng2gif");
const fs = require('fs')

fs.readdir('./','utf8',(err,data)=>{
    data.map(item=>{
        if(item.includes('png')){
            apng2gif(item, item.substring(0,item.length - 4) + '.gif')
        }
    })
})
