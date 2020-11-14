import axios from 'axios'

const providers = {
    post: {
        submitNewsletter: async data => {
            return await axios.post('https://crm.doos.pl/register', {
                params: data
            })
        }
    }
}

export default providers
