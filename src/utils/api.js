const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
}

export const getContactVersions = (contact_id) =>
    fetch(`${api}/contacts/${contact_id}/contact_versions`, { headers: headers })
    .then(res => res.json())
    .then(res => res.data)
    .catch(console.log)

export const getContacts = () =>
    fetch(`${api}/contacts`, { headers: headers })
    .then(res => res.json())
    .then(res => res.data)
    .catch(console.log)

export const createContact = async(contact) =>
    fetch(`${api}/contacts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(res => {
        if (res.error) {throw new Error(res.message)}
        return res.data
    })
    .catch(e => alert(e.message))

export const updateContact = (contact) =>
    fetch(`${api}/contacts/${contact.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(res => {
        if (res.error) {throw new Error(res.message)}
        return res.data
    })
    .then((data) => {return data})
    .catch(e => alert(e.message))

export const deleteContact = (contact_id) =>
    fetch(`${api}/contacts/${contact_id}`, {
        method: 'DELETE',
        headers: headers,
    })
    .then(res => res.json())
    .then(res => res.data)
    .catch(console.log)
