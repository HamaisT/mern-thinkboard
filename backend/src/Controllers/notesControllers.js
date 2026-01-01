import Note from '../models/Note.js'
// one way to create controllers for handling notes-related requests
// export const getAllNotes = (req, res) => {
//     res.status(200).send('you just fetched the notes');
// };

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find();
        res.status(200).json(notes)
    } catch (error) {
        console.error('Error in getAllNotes controller:', error);
        res.status(500).json({message:'Internal server error'});
    }
};

export async function createNote(req, res) {
      try {
       const { title, content } = req.body;
       const note = new Note({title, content});

       const savedNote = await note.save();
       res.status(201).json(savedNote)
      } catch (error) {
        console.error('Error in createNote controller:', error);
        res.status(500).json({message:'Internal server error'});
      }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});

        if(!updatedNote) return res.status(404).json({message: 'Note not found'});
        res.status(200).json({message:`Note with id ${req.params.id} updated successfully`, updatedNote});
    
    } catch (error) {
        console.error('Error in updateNote controller:', error);
        res.status(500).json({message:'Internal server error'});
    }
}

export async function deleteNote(req, res) { 
    res.status(200).json({ message: `Note with id ${req.params.id} deleted successfully` });
}