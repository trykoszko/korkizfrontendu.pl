import axios from 'axios'

const providers = {
    post: {
        submitNewsletter: async data => {
            return await axios.post('http://localhost:3000/register', {
                params: data
            })
        }
    }
}

export default providers
