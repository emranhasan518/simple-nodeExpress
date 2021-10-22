const express = require ('express');
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) =>{
    res.send('wow i can run my  second node server');
});

const users =[
    {id:0, name:'Sabana', email: 'sabanaalamgir@gmail.com', phone: '01788888811'},
    {id:1, name:'Sabnur', email: 'sabnur@gmail.com', phone: '017888555811'},
    {id:2, name:'Srabonti', email: 'srabonti@gmail.com', phone: '0112344488811'},
    {id:3, name:'Sochorita', email: 'sochorita@gmail.com', phone: '017856668811'},
    {id:4, name:'Sonia', email: 'sonia@gmail.com', phone: '01788899811'},
]

app.get('/users',(req, res)=>{
    const search = req.query.search;

    //use search queary parameter
    if (search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user=users[id]
   res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('yummy yummy tok marka fozli');
})

app.listen(port, ()=>{
    console.log('Listening to port ', port)
})