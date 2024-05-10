import express from 'express';
import { addNote, deleteNote, getAllNotes, updateNote } from './controllers/notes.controller.js';

const router = express.Router();
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now());
    next()
}
router.use(timeLog);

router.get('/getAllNotes', getAllNotes);
router.post('/addNote', addNote);
router.put('/updateNote', updateNote);
router.delete('/deleteNote', deleteNote);


export default router;
