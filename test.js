const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log("hello");
})

app.listen(3000, ()=>{
    console.log('LISTENING TO PORT 3000');
});
