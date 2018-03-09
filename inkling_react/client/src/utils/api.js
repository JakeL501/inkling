import axios from "axios";

export default {
    // Gets the book with the given id
    getArtist: function (id) {
        return axios.get("/api/artist/" + id);
    },
};