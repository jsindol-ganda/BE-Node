export class Note {
    date = new Date();

    /**
     * 
     * @param {number} id 
     * @param {string} title 
     * @param {string} desc 
     * @param {Date} date 
     */
    constructor(id, title, desc, date, isChecked) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.isChecked = isChecked;
    }
}