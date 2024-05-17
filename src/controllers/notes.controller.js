import { addANote, completeTask, deleteANote, getAllCompletedTask, getListOfNotes, updateANote } from "../services/notes.service.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getAllNotes = (req, res) => {
    res.status(200).send(getListOfNotes());
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const addNote = (req, res) => {
    const payload = {
        title: req.body.title,
        desc: req.body.desc,
        date: req.body.date,
    }
    res.status(200).json({message: addANote(...Object.values(payload))})
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const updateNote = (req, res) => {
    const payload = {
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
    }
    res.status(200).json({message: updateANote(...Object.values(payload))})
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const deleteNote = (req, res) => {
    const message = deleteANote(req.body.id);
    res.status(message === 'success' ? 200 : 500).json({message})
}


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getCompletedNotes = (req, res) => {
    res.status(200).send(getAllCompletedTask());
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const updateTask = (req, res) => {
    const payload = {id: req.body.id, isChecked: req.body.isChecked}
    const message = completeTask(...Object.values(payload));
    res.status(message === 'success' ? 200 : 500).json({message})
}