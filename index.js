let express = require("express");
let app = express();

app.listen(5737);

// app.get('/', (req,res)=>{
//     res.send("hello world!");
// });

app.use( express.static('./public') );

let counter = 100;

app.get('/api/counter', (req,res)=>{
    counter = counter + 1;
    res.send({counter});
});