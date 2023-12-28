const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  // Sending HTML content dynamically
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3">http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3</a></li>
                <li><a href="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg">http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg</a></li>
                <li><a href="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3">http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3</a></li>
            </ul>
        </nav>
    
        <h2>3 random audios</h2>
    
        <audio controls>
            <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    
        <audio controls>
            <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" type="audio/ogg">
            Your browser does not support the audio element.
        </audio>
    
        <audio controls>
            <source src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    
        <script type="text/javascript" src="./script.js"></script>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.status(200).send(`${a + b}`);
});

module.exports = app;
