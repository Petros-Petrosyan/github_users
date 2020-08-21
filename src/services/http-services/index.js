import axios from 'axios';

export const baseRequest = axios.create({
    baseURL: 'https://api.github.com'
});

export {
    getUserReposRequest,
    getUserOrgsRequest,
} from './users';