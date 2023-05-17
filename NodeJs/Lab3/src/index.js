const express = require('express');
const app = express();

const Homerouter = require('./Routes/homeRoutes');
const NewNoteRoutes = require('./Routes/newNoteRoutes');
const ReadNotesRoutes = require('./Routes/ReadNoteRoutes.js');

const path = require('path');
const port = process.env.PORT || 3000;

// Middleware that gets executed before every request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['css'] // Specify the extensions for CSS files
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// app middleware
app.use(Homerouter);
app.use('/new-note', NewNoteRoutes);
app.use('/read-notes', ReadNotesRoutes);

// Catch all middleware - error handling
app.use((req, res, next) => {app.use(express.static(path.join(__dirname, 'public')));
    res.sendFile(__dirname + '/views/404.html');
});

app.listen(port); 