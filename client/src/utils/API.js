import axios from "axios";

export default {
    getBooks: function () {
        return axios.get("/api/books");
    },
    getBook: function (id) {
        return axios.get("/api/books" + id);
    },
    saveBook: function(bookInfo) {
        return axios.post("api/books", bookInfo)
    },
    removeBook: function(id) {
        return axios.delete("/api/books" + id)
    }
}