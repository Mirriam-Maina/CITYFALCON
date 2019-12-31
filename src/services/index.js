import axios from 'axios';

const Service = {
    post: (URL, body) => axios.post(URL, body),
    get: (URL) =>axios.get(URL)
}


export default Service;