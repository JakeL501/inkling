import axios from "axios";

export default {


// // Gets InkStyles
       getArtist: function (id) {
           return axios.get("/api/inkerProfile/" + id);
       },
    
       getSkins: function (id) {
           return axios.get("/api/skinProfile/" + id);
       },
    
       getInkRequest: function (id) {
           return axios.get("/api/inkRequest/" + id);
       },
    
       // Gets all ink requests to populate inkRequest page
       getInkRequest: function (id) {
           return axios.get("/api/inkRequest/" + id);
       },
    
       getInkerSample: function () {
           return axios.get("/api/inkerSample");
       },
    
       // Gets all inker amples to post to inkerSample
       getInkerSampleById: function (id) {
           return axios.get("/api/inkerSample/" + id);
       },
    
       saveArtist: function(id) {
           return axios.post("/api/inkerProfile/", id);
       },
    
       saveSkins: function(id) {
           return axios.post("/api/skinProfile/", id);
       },
    
       saveInkRequest: function(id) {
           return axios.post("/api/inkRequest", id);
       },
    
       saveInkerSample: function(id) {
           return axios.post("/api/inkerProfile", id);
       }
};