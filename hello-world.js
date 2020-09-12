const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
   
    console.log(req.body);
    const data=req.body;
    if(JSON.stringify(data) != '{}'){
        const str='hai KB';
        console.log(data);
        res.send(str);
        //res.send('received a new request along with data');
    }
    else{
        res.send('No data Received');
    }
});

app.get('/', (req, res) => {
   
    console.log(req.body);
   
    const data=req.body;
    const str='hai KB';
    console.log(data);
    res.send(str);
    // if(JSON.stringify(data) != '{}'){
    //     const str='hai KB';
    //     console.log(data);
    //     res.send(str);
    //     //res.send('received a new request along with data');
    // }
    // else{
    //     res.send('received a new request without any data');
    // }
});
app.listen(3000, () => {
    console.log('listening for requests on port 3000');
});