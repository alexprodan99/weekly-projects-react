const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { readFile, writeFile } = require('./fs_util');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        optionSuccessStatus: 200,
    })
);

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

const PORT = 8000;

app.get('/highscore', (req, res) => {
    const fileContent = JSON.parse(readFile('./highscore.json'))['top_scores'];
    res.json(fileContent);
});

app.put('/highscore', (req, res) => {
    const fileContent = JSON.parse(readFile('./highscore.json'))['top_scores'];
    const username = req.body.username;
    const score = req.body.score;

    const highScoreIndex = fileContent.findIndex(
        (item) => item.username === username
    );

    if (highScoreIndex >= 0 && fileContent[highScoreIndex].score >= score) {
        res.json({ message: 'Successfully updated highscores!' });
        return;
    }

    if (highScoreIndex >= 0 && fileContent[highScoreIndex].score < score) {
        fileContent.splice(highScoreIndex, 1);
    }

    // find position where it should be placed
    const indexToInsert = fileContent.findIndex((item) => item.score > score);
    if (indexToInsert < 0) {
        fileContent.unshift({
            username,
            score,
        });
    } else {
        fileContent.splice(indexToInsert + 1, 0, {
            username,
            score,
        });
    }

    writeFile('./highscore.json', JSON.stringify({ top_scores: fileContent }));

    res.json({ message: 'Successfully updated highscores!' });
});

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});
