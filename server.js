var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var app = express()

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

//filename

app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  result = {
    filename: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  }
  res.send(result);
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
