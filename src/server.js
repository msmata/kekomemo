const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'dist/kekomemo'));
app.get('*',function(req,res){
    res.sendFile('index.html', {root: 'dist/kekomemo/'});
});

app.listen(process.env.PORT || 4200);

console.log("Server running in port ", process.env.PORT || 4200);