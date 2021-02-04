import React from 'react'
import EditForm from './edit_form'
import CreateForm from './create_form'
import './contact_form.css';

const ContactForm = ({contact, editable, handleFormSubmit}) => {
	return ( 
		<div>
			{ editable ? (
				<EditForm key = {contact.id} contact = {contact} handleFormSubmit = {handleFormSubmit} action = "edit" />
			) : (
				<CreateForm handleFormSubmit = {handleFormSubmit} action = "new" />
			)}
		</div>
	)
};

export default ContactForm;
