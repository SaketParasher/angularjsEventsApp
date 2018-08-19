
const express = require('express');
const app = express();
const path = require('path');
const rootpath = path.join(__dirname+'/../');
const fs = require('fs');
const bodyParser = require('body-parser');

// without this we will not be able to serve static files like app.css or images to html files which are being server by express
// express serves thes files directly without processing them 
// to use any file inside app or js directory we only to need relative path of that file from app or js directory
app.use(express.static(path.join(rootpath+'/app/')));
app.use(express.static(path.join(rootpath+'/app/js/')));

app.use(bodyParser.json());
bodyParser.urlencoded({extended:false});

app.get('/data/all',(req,res) => {
    var fileNames='';
    var resArr = [];
    var resObj = {};
    res.setHeader('Content-Type', 'application/json');
    fs.readdir(rootpath+'/data/',(err,files)=>{
        if(err){
            console.log('Err in reading Directory '+err);
        }else{
            files.forEach((fileName,index) => {
                
                 if(index == (files.length-1)){
                     //resArr.push( (fs.readFileSync(rootpath+'/data/'+fileName)).toString() );
                     resObj[index] = (fs.readFileSync(rootpath+'/data/'+fileName)).toString();
                     res.send(resObj);
                 }else{
                     //resArr.push( (fs.readFileSync(rootpath+'/data/'+fileName)).toString() );
                     resObj[index] = (fs.readFileSync(rootpath+'/data/'+fileName)).toString();
                 }
            });
        }
    })
});

app.get('/data/:id',(req,res) => {
    var id = req.params['id'];
    var resArr = [];
    res.setHeader('Content-Type', 'application/json');
    res.send(fs.readFileSync(rootpath+'/data/'+id+'.json'));
});

app.post('/data/:id',(req,res) =>{
    var reqBody = req.body;
    var newData = {};
    for(var prop in reqBody){
        newData[prop] = reqBody[prop];
    }
    fs.readdir(rootpath+'/data',(err,files) => {
        if(err){
            console.log('Error '+err);
        }

        if(!err){
            var nextIndex = files.length+1;
            console.log(JSON.stringify(newData));
            fs.writeFile(rootpath+'data/'+nextIndex+'.json',JSON.stringify(newData),(err) =>{
                if(!err)
                    res.send('Data Saved');
            });
        }
    });
});



app.get('*',(req,res) => {
    res.sendFile(path.join(rootpath+'/app/js/views/index.html'));
})

app.listen(4000);