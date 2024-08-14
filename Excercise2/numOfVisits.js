const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
const port =3010;

app.get('/',(req,res)=>{

    let count = parseInt(req.cookies.count)||0;
    let last = req.cookies.last;
    count+=1;

    const currentDate= new Date();
    const lastmsg = last ? ` Last time you visited the page was on: ${last} and you have visited this website ${count} times`: " ";
    const welcome = count ===1
    ? `This is your first time on the page and the time and day is ${currentDate}`: "";

    res.cookie('count', count);
    res.cookie('last',currentDate.toString());

    res.send(` <h1>${welcome}</h1>
        <p>${lastmsg}</p>
        `)


});

app.listen(port,()=>{
    console.log(`Server is hosted on port: ${port}`);
});