const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'
const token = process.env.REACT_APP_CONTACTS_API_TOKEN

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getContacts = () => {
    const url = `${api}/contacts`
    fetch(url, { headers })
        .then(res => res.json())
        .then(data => data.contacts)
        .catch(console.log)
}