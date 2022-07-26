const fs = require('fs')
const express = require('express');
const router = express.Router();
const folderLogic = require('../BL/folderLogic')
const fileLogic = require('../BL/fileLogic')
const multer = require('multer'),
    upload = multer();

router.get('folder',  async (req, res) => {
    try {
        console.log("data ok");
        // const data = fileLogic.readFile()
        // res.send(data)
    } catch (error) {
        console.log("bbb :", error);
    }
})
router.put('/folder/u',  async (req, res) => {
    try {

    } catch (error) {
        console.log("put : ", error);

    }
})

router.post('/folder/p', async (req, res) => {
    try {
        console.log(req);
        // fileLogic.saveFile(req.file)
        // const newData = fileLogic.creatFile('test.txt','test')
        res.send("post : ok! ")
    } catch (error) {
        console.log("post : ", error);
    }
})

router.delete('/folder/d', fileLogic.isValid, async (req, res) => {
    try {

    } catch (error) {
        console.log("delete : ", error);

    }
})


module.exports = router;

