import { addANote, deleteANote, getListOfNotes, updateANote } from "../services/notes.service.js"

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
        date: req.body.date
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
    const result = deleteANote(req.body.id);
    res.status(result === 'success' ? 200 : 500).json({message: result})
}