const fs = require('fs');


const readFolder = function () {
   return fs.readFileSync("./data/users.json", "utf-8");
};
const saveFolder = function(folderName){
    try {
        fs.writeFileSync('./root/'+folderName)
        console.log("save folderName ok");
    } catch (error) {
        console.log("save folderName: ", error);
    }
}
const creatFolder = function (folderName) {
    try {
        fs.writeFileSync(folderName)
          console.log("folder is created successfully.");
          return true;        
    } catch (error) {
        console.log("createfolder : " , error);
    }
};

const writefolder = function (contenet) {
    try {
        const data = fs.writeFileSync("./file.txt", contenet);
        console.log("folder written successfully");
    } catch (err) {
        console.error(err);
    }
};

const deletefolder = function (folderName ,fileName) {
    if(!isExsist(fileName)) throw {code : 444, messeage: "this file not found"}
    fs.unlinkSync('./root/'+fileName)
        console.log("File deleted!");
        fs.unlinkSync('./'+folderName)
};

function isExsist(fileName){
    return fs.existsSync('./root/'+ fileName)
}


module.exports = { readFile, creatFile, writeFile, deleteFile, saveFile, isValid, isExsist }