import React from 'react'
import './contact.css';

const Contact = ({contact, handleHistory, handleEdit, handleDelete}) => {
	return (
		<div key={contact.name} className="card">
			<div className="card-body">
				<div className="card-attributes">
					<h5 className="card-title">{contact.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
					<p className="card-text">{contact.phone}</p>
				</div>
				<div className="card-buttons">
					<button type="button" className="btn action-btn history-btn" onClick={() => handleHistory(contact)}><img className="btn-img" src="/history.svg" alt="history" /></button>
					<button type="button" className="btn action-btn edit-btn" onClick={() => handleEdit(contact)}><img className="btn-img" src="/edit.svg" alt="edit" /></button>
					<button type="button" className="btn action-btn delete-btn" onClick={() => handleDelete(contact)}><img className="btn-img" src="/cancel.svg" alt="cancel" /></button>
				</div>
			</div>
		</div>
	)
};

export default Contact;
