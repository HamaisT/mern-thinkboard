// one way to create controllers for handling notes-related requests
// export const getAllNotes = (req, res) => {
//     res.status(200).send('you just fetched the notes');
// };

export function getAllNotes(req, res){
    res.status(200).send('you just fetched the notes');
};

export function createNote(req, res) {
    res.status(201).json({ message: 'Note created successfully' });
}

export function updateNote(req, res) {
    res.status(200).json({ message: `Note with id ${req.params.id} updated successfully` });
}

export function deleteNote(req, res) { 
    res.status(200).json({ message: `Note with id ${req.params.id} deleted successfully` });
}