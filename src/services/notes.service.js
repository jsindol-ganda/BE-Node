
import {Note} from '../models/Note.js';

var myNotes = [new Note(1, "Pick Berry", "Pick up Rachel Berry from practice", new Date(), false),
                    new Note(2, "Buy Album", "Get the latest Charli XCX album", new Date(), false),
                    new Note(3, "Do Laundry", "Go to Ari's and do laundry", new Date(), false)];
/**
 * 
 * @returns Note[];
 */
export const getListOfNotes = () => {
    return myNotes;
}

/**
 * 
 * @param {string} title 
 * @param {string} desc 
 * @param {Date} date 
 * @returns string
 */
export const addANote = (title, desc, date) => {
    myNotes.push(new Note(myNotes.length + 1, title, desc, date, false));
    return 'success';
}

/**
 * 
 * @param {number} id 
 * @param {string} title 
 * @param {string} desc 
 * @returns string
 */
export const updateANote = (id, title, desc) => {
    myNotes = myNotes.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: title,
            desc: desc,
            date: new Date()
          }
        }

        return item;
    })

    return 'success';
}

/**
 * 
 * @param {number} id 
 * @returns string;
 */
export const deleteANote = (id) => {
    // let result = 'success';
    const indexToDelete = myNotes.findIndex(item => item.id === id);

    if (indexToDelete === -1) {
        return 'No note to be deleted';
    }

    myNotes.splice(indexToDelete, 1);

    return 'success';
}

export const getAllCompletedTask = () => {
    return myNotes.filter(item => item.isChecked);
}

/**
 * 
 * @param {number} id 
 * @param {boolean} isChecked 
 * @returns 
 */
export const completeTask = (id, isChecked) => {
    const indexToDelete = myNotes.findIndex(item => item.id === id);

    if (indexToDelete === -1) {
        return 'No note to be completed';
    }

    myNotes = myNotes.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isChecked,
            date: new Date()
          }
        }

        return item;
    });

    return 'success';
}