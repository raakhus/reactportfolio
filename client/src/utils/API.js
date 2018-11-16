import axios from "axios";

export default {
  // Gets all contacts
  getContacts: function() {
    return axios.get("/api/contacts1");
  },
  // Gets the contact with the given id
  getContact: function(id) {
    return axios.get("/api/contacts1/" + id);
  },
  // Deletes the contact with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contacts1/" + id);
  },
  // Saves a contact to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts1", contactData);
  }
};
