import React from 'react'
import './contact_history.css';

const History = ({contact, contact_versions}) => {
	return (
		<div>
			<div className="text-center canvas-title-default">
					<h5 className="text-muted">CURRENT CONTACT</h5>
			</div>
			<div key={contact.name} className="card">
				<div className="card-body border-success">
					<div className="text-center card-attributes contact-current">
					<p className="card-text text-muted">LAST UPDATE DATE: {contact.updated_at}</p>
						<h5 className="card-title">{contact.first_name} {contact.last_name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{contact.email} | {contact.phone}</h6>
					</div>
				</div>
			</div>
			<div className="text-center contact-history-separator">
				<h5 className="text-muted">CONTACT'S HISTORY</h5>
			</div>
			{contact_versions.map((contact) => (
				<div key={contact.name} className="card">
					<div className="card-body">
						<div className="text-center card-attributes">
							<p className="card-text text-muted">EDIT DATE: {contact.created_at}</p>
							<p className="card-text text-muted">{contact.first_name} {contact.last_name}</p>
							<p className="card-subtitle mb-2 text-muted">{contact.email} | {contact.phone}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
};

export default History;
