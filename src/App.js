import React, { Component } from 'react';
// import axios from "axios";
import Contact from './components/contact';
import ContactForm from './components/contact_form';
import ContactHistory from './components/contact_history';
import * as API from './utils/api'
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
    console.log(API.getContacts())
    // API.getContacts().then((contacts) => {
    //   this.setState({ contacts });
    // })
    // axios.get('http://jsonplaceholder.typicode.com/users')
    //     .then((response) => {
    //         this.setState({ contacts: response.data });
    //     })
        
        //fetch('http://jsonplaceholder.typicode.com/users')
        //.then(res => res.json())
        //.then((data) => {
        //	this.setState({ contacts: data });
        // })
        // .catch(console.log)
  };

  addContact = (contact) => {
    this.setState(state => ({
      showForm: true,
      editable: false,
      selectedContact: null
    }))
  }

  showHistory = (contact) => {
    this.setState(state => ({
      showForm: false,
      selectedContact: contact,
      contact_versions: this.state.contacts,
      // contact_versions: get_versions(contact)
    }))
  }

  editContact = (contact) => {
    this.setState(state => ({
      showForm: true,
      editable: true,
      selectedContact: contact
    }))
  }

  removeContact = (contact) => {
    this.setState(state => ({
      contacts: this.state.contacts.filter(obj => obj !== contact),
      showForm: false,
      selectedContact: null
    }))
  }

  formSubmit = (contact, name, email, phone, action) => {
    const newContact = {
      name: name,
      email: email,
      phone: phone
    }

    this.setState(state => ({
      showForm: false,
      selectedContact: null,
      contacts:
        (action === 'new') ? (
          this.state.contacts.concat([newContact])
        ) : (
          this.state.contacts.map(obj => (
            obj === contact ? newContact : obj
        ))
        )
    }))
  }


  render() {
    return (
      <div className="app">
        <div className="contacts-navbar">
          <center>
            <h1>Contact List</h1>
            <button type="button" className="btn btn-success" onClick={this.addContact}>+ NEW CONTACT</button>
          </center>
        </div>
        <div className="contacts-body">
          <div className="contacts">
            <div className="text-center canvas-title-default">
              <h5 className="text-muted">CONTACTS</h5>
            </div>
            {this.state.contacts.map((contact) => {
              return <Contact key = {contact.id} contact = {contact} handleHistory = { this.showHistory } handleEdit = { this.editContact } handleDelete = { this.removeContact } />
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