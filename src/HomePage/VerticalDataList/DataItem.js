
//This class encapsulates the the information required to display a piece of data in the vertical data list
//This includes an icon, title and a short description
class DataItem {
    constructor(icon, title, shortDescription) {
        this.icon = icon
        this.title = title
        this.shortDescription = shortDescription
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