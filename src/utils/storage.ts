import { User } from "../types/User";

export const saveUserData = (data: User) => {
    localStorage.setItem('dataUser', JSON.stringify(data));
};

export const getUserData = () => {
    const data = localStorage.getItem('dataUser');
    return data ? JSON.parse(data) : null;
};