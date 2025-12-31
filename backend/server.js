import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
    res.status(200).send('you got 15 notes');
});

app.post('/api/notes', (req, res) => {
    res.status(201).json({ message: 'Notes created successfully' });
});

app.put('/api/notes/:id', (req, res) => {
    res.status(200).json({ message: `Notes with id ${req.params.id} updated successfully` });
});

app.delete('/api/notes/:id', (req, res) => {
    res.status(200).json({ message: `Notes with id ${req.params.id} deleted successfully` });
});

app.listen(5001, () => {
  console.log('Server started on port: 5001');
});