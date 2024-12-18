// purpose of this exercise is to create a file clutter by using js 
// this will arrange files on the basis of thier extension
// we have many files heres lets begin 

import fs from "fs/promises"
import fsn from "fs"
import path from "path"
import { json } from "stream/consumers"

let basepath = "c:\\Users\\MrNDJ\\Desktop\\MrNDJ\\Codes\\Backend\\exercise15"
// console.log(basepath) 

let files = await fs.readdir(basepath)
// console.log(files)

for (const item of files) {
    // console.log("runnig for ",item)
    let ext = item.split(".")[item.split(".").length -1] ;
    console.log(ext)
    if(ext != "js" && ext != "json" && item.split(".").length > 1){

        if(fsn.existsSync(path.join(basepath, ext))){
            fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
        }else{
            fs.mkdir(ext)
        }
    }
}