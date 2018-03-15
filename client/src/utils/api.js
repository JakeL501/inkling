import axios from "axios";

export default {


// Gets InkStyles
    getInkStyles: function () {
        return axios.get("/api/inkStyle");
    },
    // getInkStyle: function () {
    //     return axios.get("/api/inkStyle" + id);
    // },

    // Saves a book to the database
    saveInkling: function (inklingData) {
        return axios.post("/api/", inklingData);
    },

    // Get INKER / Artist Profile
    getArtist: function (id) {
        return axios.get("/api/inkerProfile/" + id);
    }

    
    // getBooks: function () {
    //     return axios.get("/api/books");
    // },

    // // Gets the book with the given id
    // getBook: function (id) {
    //     return axios.get("/api/books/" + id);
    // },


    // // Deletes the book with the given id
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    // },


    // Saves a book to the database
    // saveBook: function (bookData) {
    //     return axios.post("/api/books", bookData);
    // }

        // Gets related inkSpire for inkStyle
    // getInkSpireArticle: function (id) {
    //     return axios.get("/api/InkSpireArticles/" + id);
    // },

    //  Gets the inkSpire with the given id
    // getInkSpire: function (topic, begin, end) {
    //     return axios.get("" + topic + "&begin_date=" + begin + "&end_date=" + end);
    // },
};