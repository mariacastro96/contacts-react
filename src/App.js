import React, { Component } from 'react';
import Contact from './components/contact';
import ContactForm from './components/contact_form';
import ContactHistory from './components/contact_history';
import * as ContactsAPI from './utils/api'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contact_versions:[],
      showForm: false,
      editable: false,
      selectedContact: null
    }
    this.removeContact = this.removeContact.bind(this);
  }

  componentDidMount() {
    ContactsAPI.getContacts()
    .then((contacts) => { 
      if (contacts !== undefined) this.setState({ contacts })
    })
  };

  showAddForm = () => {
    this.setState(() => ({
      showForm: true,
      editable: false,
      selectedContact: null
    }))
  }
  
  showEditForm = (contact) => {
    this.setState(() => ({
      showForm: true,
      editable: true,
      selectedContact: contact
    }))
  }

  showHistory = (contact) => {
    ContactsAPI.getContactVersions(contact.id)
    .then((contact_versions) => {
      this.setState({ contact_versions })
    })
    
    this.setState(() => ({
      showForm: false,
      selectedContact: contact,
    }))
  }

  removeContact = (contact) => {
    ContactsAPI.deleteContact(contact.id);

    this.setState(() => ({
      contacts: this.state.contacts.filter(obj => obj !== contact),
      showForm: false,
      selectedContact: null
    }))
  }

  formSubmit = (oldContact, newContact, action) => {
    this.setState(() => ({
      contacts:
      (action === 'new') ? (
        this.state.contacts.concat([newContact])
      ) : (
        this.state.contacts.map(obj => (
          obj === oldContact ? newContact : obj
        ))
      ),
      selectedContact: null,
      showForm: false
    }))
  }


  render() {
    return (
      <div className="app">
        <div className="contacts-navbar">
          <center>
            <h1>Contact List</h1>
            <button type="button" className="btn btn-success" onClick={this.showAddForm}>+ NEW CONTACT</button>
          </center>
        </div>
        <div className="contacts-body">
          <div className="contacts">
            <div className="text-center canvas-title-default">
              <h5 className="text-muted">CONTACTS</h5>
            </div>
            {this.state.contacts.map((contact) => {
              return <Contact key = {contact.id} contact = {contact} handleHistory = { this.showHistory } handleEdit = { this.showEditForm } handleDelete = { this.removeContact } />
            })}
          </div>
          <div className="canvas">
            {this.state.showForm ? (
              <ContactForm  contact = {this.state.selectedContact} editable = {this.state.editable} handleFormSubmit = {this.formSubmit}/>
            ) : (
              <ContactHistory contact = {this.state.selectedContact} contact_versions = {this.state.contact_versions} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;