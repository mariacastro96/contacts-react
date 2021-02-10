import React from 'react'
import History from './history'

const ContactHistory  = ({contact, contact_versions}) => {
	return ( 
		<div>
			{ contact ? (
				<History key = {contact.id} contact = {contact} contact_versions = {contact_versions} />
			) : (
				<div className="text-center canvas-title-default">
					<h5 className="text-muted">PICK A CONTACT TO SEE ITS HISTORY OR CREATE A NEW ONE</h5>
				</div>
			)}
		</div>
	)
};

export default ContactHistory ;
