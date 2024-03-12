
//This class encapsulates the the information required to display a piece of data in the vertical data list
//This includes an id, icon, title and a short description
class DataItem {
    constructor(id, icon, title, shortDescription) {
        this.id = id
        this.icon = icon
        this.title = title
        this.shortDescription = shortDescription
    }

    getId() {
        return this.id
    }

    getIcon() {
        return this.icon
    }

    getTitle() {
        return this.title
    }

    getShortDescription() {
        return this.shortDescription
    }
}

export default DataItem