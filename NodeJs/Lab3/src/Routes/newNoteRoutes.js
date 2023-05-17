const express = require('express');
const newNoteRoutes = express.Router();
const path = require('path');

const fs = require('fs');
const notesFilePath = path.join(__dirname, '../Model', 'notes.json');

newNoteRoutes.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'note.html'));
});

newNoteRoutes.post('/', (req, res) => {
    const { title, content } = req.body;
    const newNote = {
      title,
      content
    };
  
    fs.readFile(notesFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Couldn't read your notes...");
      }
  
      // Pushing your new note to the notes array
      const notes = JSON.parse(data);
      notes.push(newNote);


      // Writing the notes array to the notes.json file
      fs.writeFile(notesFilePath, JSON.stringify(notes), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Couldn't write your new note, try again later...");
        }
  
        console.log('Note has been saved successfully!');
        // redirecting to home
        res.redirect('/');
      });
    });
  });
  
module.exports = newNoteRoutes;