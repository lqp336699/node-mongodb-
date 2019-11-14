import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("100")
})

app.listen(8080, () => console.log('Server is running on localhost:8080'));