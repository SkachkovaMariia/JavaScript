const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8000;
const HOST = 'localhost';
const api = require('./api');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/fetchUsers', async (req, res) => {
    const sortOrder = req.query.sortOrder || 'asc';
    const sortBy = req.query.sortBy || 'firstname';

    try {
        const users = await api.fetchUsers();
        sortUsers(users, sortBy, sortOrder);
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.get('/getNewUsers', (req, res) => {
    const newUsers = api.getNewUsers();
    res.json(newUsers);
});

app.get('/galleryImages', (req, res) => {
    const galleryPath = path.join(__dirname, 'gallery');

    fs.readdir(galleryPath, (err, files) => {
        if (err) {
            console.error('Error reading gallery directory:', err);
            res.status(500).json({ error: 'Failed to read gallery directory' });
        } else {
            res.json(files);
        }
    });
});

let currentTemperature = 12;
let city = 'Kyiv';

app.get('/weather', (req, res) => {
    currentTemperature = Math.floor(Math.random() * 31);
    const weatherData = { city, temperature: currentTemperature };
    res.json(weatherData);
});

app.listen(PORT, HOST, () => {
    console.log(`Server started http://${HOST}:${PORT}`);
});

function sortUsers(users, sortBy, sortOrder) {
    users.sort((a, b) => {
        const aValue = a[sortBy].toLowerCase();
        const bValue = b[sortBy].toLowerCase();

        if (sortOrder === 'asc') {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });
}
