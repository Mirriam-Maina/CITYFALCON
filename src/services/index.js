import { data } from '../data';

const Service = {
    post: (body) => data.stories.push(body),
    get: () => data.stories
}

export default Service;