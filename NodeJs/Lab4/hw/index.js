const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')



// Setups and Config
const app = express();
const membersArr = [
  { id: uuid.v4(), name: "Mario", email: "mario@mail.com" },
  { id: uuid.v4(), name: "Luigi", email: "luigi@mail.com" },
  { id: uuid.v4(), name: "Yoshi", email: "yoshi@mail.com" }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));


/////////////
// Routes
/////////////

// Home Page
app.get('/', (req, res, next) => {
    res.render('index')
})

// Members Page
app.get('/members', (req, res, next) => {
    res.render('members', {members: membersArr})
})

app.post('/members', (req, res, next) => {
    // Get the new data from the body
    const {name, email} = req.body
    const newUser = {
        id: uuid.v4(),
        name: name,
        email: email
    }
    // Push the new user to the array
    membersArr.push(newUser)
    res.render('members', { members: membersArr })
})


// Get spectific member by ID
app.get('/members/:id', (req, res, next) => {
    
    const id = req.params.id
    
    const user = membersArr.find((user) => user.id === id)

    if(user){
        res.render('member', {user: user})
    }

    else{
        res.status(400).json({msg: "User hasn't been found..."})
    }
})


app.use((req, res) => res.sendFile(path.join(__dirname, 'public', '404.html')))


// Listener
const PORT = process.env.PORT || 8000
app.listen(PORT)
