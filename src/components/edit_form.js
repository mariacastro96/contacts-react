import React, { Component } from 'react';
import * as ContactsAPI from '../utils/api'
import './contact_form.css';


class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: {
				id: this.props.contact.id,
				first_name: this.props.contact.first_name,
				last_name: this.props.contact.last_name,
				email: this.props.contact.email,
				phone: this.props.contact.phone
			}
		};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	

	handleInputChange = (event) => {
		const target = event.target;
    const value = target.value;
    const name = target.name;
		const contact = this.state.contact;
		contact[name] = value

    this.setState({
			contact
		});
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		let updatedContact = await ContactsAPI.updateContact(this.state.contact);
		
		if (updatedContact !== undefined) {
			this.props.handleFormSubmit(this.props.contact, updatedContact, this.props.action)
		}
	}
	
	render() {
		return (
			<form>
				<div className="text-center canvas-title-default">
					<h5 className="text-muted">EDIT THIS CONTACT</h5>
				</div>
				<div className="form-group">
					<label className="text-muted">First Name:</label>
					<input className="form-control" name="first_name" type="text" value={this.state.contact.first_name} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label className="text-muted">Last Name:</label>
					<input className="form-control" name="last_name" type="text" value={this.state.contact.last_name} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label className="text-muted">Email:</label>
					<input className="form-control" name="email" type="text" value={this.state.contact.email} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label className="text-muted">Phone:</label>
					<input className="form-control" name="phone" type="text" value={this.state.contact.phone} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<input className="btn btn-success" type="submit" value="Submit" onClick={this.handleSubmit} />
				</div>
			</form>
		)
	}
};

export default EditForm;
