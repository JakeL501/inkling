import axios from "axios";

export default {
    // Gets the book with the given id
    getArtist: function (id) {
        return axios.get("/api/inkerProfile/" + id);
    },
};
// export default {
//     // Gets the book with the given id
//     getClient: function (id) {
//         return axios.get("/api/skinProfile/" + id);
//     },
// };

