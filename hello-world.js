const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const stored_data=[];

app.post('/', (req, resp) => {
   
    console.log(req.body);
    const data=req.body;
    if(JSON.stringify(data) != '{}'){
        stored_data.push(data);
        resp.send('received a new request along with data');
    }
    else{
        resp.send('No data Received');
    }
});

app.get('/', (req, resp) => {
   
    console.log(req.body);
    const data=req.body;
    if(JSON.stringify(data) != '{}'){
        stored_data.push(data);
    }
    resp.send(stored_data);
    
});
app.listen(process.env.PORT || 3000, () => {
    console.log('listening for requests on port 3000');
});