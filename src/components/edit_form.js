import React, { Component } from 'react';
import './contact_form.css';


class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.contact.name,
			email: this.props.contact.email,
			phone: this.props.contact.phone
		};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	

	handleInputChange = (event) => {
		const target = event.target;
    const value = target.value;
    const name = target.name;
		
    this.setState({
			[name]: value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleFormSubmit(this.props.contact, this.state.name, this.state.email, this.state.phone, this.props.action)
	}
	
	render() {
		return (
			<form>
				<div className="text-center canvas-title-default">
					<h5 className="text-muted">EDIT THIS CONTACT</h5>
				</div>
				<div className="form-group">
					<label>Name:</label>
					<input className="form-control" name="name" type="name" value={this.state.name} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label>email:</label>
					<input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label>phone:</label>
					<input className="form-control" name="phone" type="phone" value={this.state.phone} onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<input className="btn btn-success" type="submit" value="Submit" onClick={this.handleSubmit} />
				</div>
			</form>
		)
	}
};

export default EditForm;
