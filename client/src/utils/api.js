import axios from "axios";
export default {
    getGoogleBooks: function (bookTitle) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle)
    },
    saveBooks: function () {

    },
    deleteBooks: function () {
        
    }

};