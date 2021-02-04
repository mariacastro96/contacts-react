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
						<h5 className="card-title">{contact.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
						<p className="card-text">{contact.phone}</p>
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
							<p className="card-text text-muted">{contact.name}</p>
							<p className="card-text text-muted">{contact.email}   |   {contact.phone}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
};

export default History;
