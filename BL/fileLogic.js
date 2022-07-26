const fs = require('fs');


const readFile = function () {
   return fs.readFileSync("./data/users.json", "utf-8");
};
const saveFile = function(file){
    try {
        fs.writeFileSync('./root/'+file.originalname,file.buffer)
        console.log("save ok");
    } catch (error) {
        console.log("save : ", error);
    }
}
const creatFile = function (fileName, contenet) {
    try {
        fs.writeFileSync(fileName, contenet)
          console.log("File is created successfully.");
          return true;        
    } catch (error) {
        console.log("createFile : " , error);
    }
};

const writeFile = function (contenet) {
    try {
        const data = fs.writeFileSync("./file.txt", contenet);
        console.log("file written successfully");
    } catch (err) {
        console.error(err);
    }
};

const deleteFile = function (fileName) {
    if(!isExsist(fileName)) throw {code : 444, messeage: "this file not found"}
    fs.unlinkSync('./root/'+fileName)
        console.log("File deleted!");
};
function isValid(req, res, next){
    const {fileName} = req.body;
    if(isValidName(fileName) && isValidExtantions(fileName)) next()

    console.log("is not valided");
}

function isExsist(fileName){
    return fs.existsSync('./root/'+ fileName)
}
function isValidName(fileName=""){
   return ['/','*','!','"',':','|','?','<','>','\\'].find(char=>fileName.includes(char))? true : false;
}
function isValidExtantions(fileName=""){
    let ext = fileName.slice(fileName.lastIndexOf('.'))
   return ['pdf','txt','png','jpg','js','html','jsx','ts'].find(char=>ext.includes(char))? true : false;
}


module.exports = { readFile, creatFile, writeFile, deleteFile, saveFile, isValid, isExsist }