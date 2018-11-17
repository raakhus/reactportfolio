import axios from "axios";
// const url = "https://randyaakhusapi.herokuapp.com/api/contacts1"
const url = 'http://localhost:3001/api/contacts1'
export default {
  // Gets all contacts
  getContacts: function() {
    return axios.get(url);
  },
  // Gets the contact with the given id
  getContact: function(id) {
    return axios.get(url + id);
  },
  // Deletes the contact with the given id
  deleteContact: function(id) {
    return axios.delete(url + id);
  },
  // Saves a contact to the database
  saveContact: function(contactData) {
    return axios.post(url, contactData);
  }
};
