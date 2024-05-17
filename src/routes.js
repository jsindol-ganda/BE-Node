import express from 'express';
import { addNote, deleteNote, getAllNotes, getCompletedNotes, updateNote, updateTask } from './controllers/notes.controller.js';

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
router.put('/updateTask', updateTask)
router.get('/getAllCompleteNotes', getCompletedNotes)


export default router;
