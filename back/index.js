const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let DataBase =[];
let Sonika=[];
let Dharaniya = [];
let Akshitha =[];
let Pavithra =[];

app.get('/Voter', async (req, res) => {
    try {
        res.json(DataBase);
    } catch(err) {
        console.log("Error in Voter", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/Voter', async (req, res) => {
    try {
        const { candidate, name , id } = req.body;
        console.log(candidate)
        DataBase.push({ candidate, name , id })
        if(candidate === "Akshitha"){
            Akshitha.push({ name , id });
        }
        else if(candidate === "Sonika"){
            Sonika.push({name , id })
        }
        else if(candidate === "Dharaniya"){
            Dharaniya.push({name , id})
        }
        else if(candidate === "Pavithra"){
            Pavithra.push({name , id })
        }
        else{
            console.log("not found")
        }
        res.json("done");
    } catch (error) {
        console.error('Error in Voter Creation:', error);
    }
});



app.delete('/delete/:i', async (req, res) => {
    try {
        const { i } = req.params;
        console.log(i);
        const initialLength = DataBase.length; 
        DataBase = DataBase.filter(game => game.id !== i); 
        const finalLength = DataBase.length;
        if (finalLength < initialLength) {
            res.json('deleted');
        
        } else {
            res.status(404).json('No voter founf to delete');
            
        }
    } catch (error) {
    
    }
});

app.put('/update/:i', (req, res) => {
    const { i } = req.params;
    console.log(i)
    const { name , id} = req.body;
    const dataIndex = DataBase.findIndex(data => data.id === i);
    console.log(dataIndex);
    if (dataIndex === -1) {
        console.log("Voter not found");
    } else {
        DataBase[dataIndex].name = name;
        DataBase[dataIndex].id = id;
        console.log('voter updated'); 
    }
    res.json('update');
});


app.get('/', async (req, res) => {
    res.send(DataBase);
});
app.get('/sonika', async (req, res) => {
    res.json(Sonika.length);
})
app.get('/Dharaniya', async (req, res) => {
    res.json(Dharaniya.length);
})
app.get('/Akshitha', async (req, res) => {
    res.json(Akshitha.length);
})
app.get('/Pavithra', async (req, res) => {
    res.json(Pavithra.length);
})

app.get('/sonika/view', async (req, res) => {
    res.send(Sonika);
})
app.get('/Dharaniya/view', async (req, res) => {
    res.send(Dharaniya);
})
app.get('/Akshitha/view', async (req, res) => {
    res.send(Akshitha);
})
app.get('/Pavithra/view', async (req, res) => {
    res.send(Pavithra);
})


app.listen(5000, () => {
    console.log("Server is Running")
})
