
/**
 * @author Eli Pardalis
 * @version 1.0.0 
 * 
 * This class is responsible for encapsulating data about the items in the vertical data list. It allows for the information about this
 *  data to be passed inside a single object. It has fields for id, icon, title and short description.
 */

class DataItem {
    constructor(id, icon, title, shortDescription) {
        this.id = id
        this.icon = icon
        this.title = title
        this.shortDescription = shortDescription
    }

    /**
     * Get the data item's id value
     * @returns the integer id for the data
     */
    getId() {
        return this.id
    }

    /**
     * Get the data's icon image
     * @returns the image that is the icon for the data
     */
    getIcon() {
        return this.icon
    }

    /**
     * Get the data's title
     * @returns {String} the title for the data
     */
    getTitle() {
        return this.title
    }

    /**
     * Get a short description of the data
     * @returns {String} a short description of the data
     */
    getShortDescription() {
        return this.shortDescription
    }
}

export default DataItem