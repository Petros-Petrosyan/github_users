import { baseRequest } from '.';

// get user repositories
export const getUserReposRequest = async (userName) => {
    const res = await baseRequest.get(`/users/${userName}/repos`);
    return res;
}

// get user organisations
export const getUserOrgsRequest = async (userName) => {
    const res = await baseRequest.get(`/users/${userName}/orgs`);
    return res;
}