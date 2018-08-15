
const express = require('express');
const app = express();
const path = require('path');
const rootpath = path.join(__dirname+'/../');

// without this we will not be able to serve static files like app.css or images to html files which are being server by express
// express serves thes files directly without processing them 
// to use any file inside app or js directory we only to need relative path of that file from app or js directory
app.use(express.static(path.join(rootpath+'/app/')));
app.use(express.static(path.join(rootpath+'/app/js/')));

app.get('/',(req,res) => {
    res.sendFile(path.join(rootpath+'/app/js/views/Eventdetails.html'));
})

app.listen(4000);