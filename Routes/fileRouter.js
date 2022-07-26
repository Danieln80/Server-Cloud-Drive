const fs = require('fs')
const express = require('express');
const router = express.Router();
const fileLogic = require('../BL/fileLogic')
const multer = require('multer'),
    upload = multer();

router.get('/file', async (req, res) => {
    try {
        const data = fileLogic.readFile()
        res.send(data)
    } catch (error) {
        console.log("bbb :", error);
    }
})
router.put('/file/u', fileLogic.isValid, async (req, res) => {
    try {

    } catch (error) {
        console.log("put : ", error);

    }
})

router.post('/file/p', upload.single('fileUp'), async (req, res) => {
    try {
        console.log(req.file);
        fileLogic.saveFile(req.file)
        // const newData = fileLogic.creatFile('test.txt','test')
        res.send("post : ok! ")
    } catch (error) {
        console.log("post : ", error);
    }
})

router.delete('/file/d', fileLogic.isValid, async (req, res) => {
    try {

    } catch (error) {
        console.log("delete : ", error);

    }
})

// fileName.split(".")[fileName.split.length-1]

module.exports = router;

