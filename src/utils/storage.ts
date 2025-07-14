import { Order } from "../types/Order";
import { Product } from "../types/Product";
import { User } from "../types/User";

export const saveUserData = (data: User) => {
    localStorage.setItem('dataUser', JSON.stringify(data));
};

export const getUserData = () => {
    const data = localStorage.getItem('dataUser');
    return data ? JSON.parse(data) : null;
};

export const saveOrderData = (data: Order) => {
    localStorage.setItem('orderData', JSON.stringify(data));
};

export const getOrderData = () => {
    const data = localStorage.getItem('orderData');
    return data ? JSON.parse(data) : null;
};

export const saveProduct = (data: Product) => {
    localStorage.setItem('product', JSON.stringify(data));
};

export const getProduct = () => {
    const data = localStorage.getItem('product');
    return data ? JSON.parse(data) : null;
};

export const clearData = () => {
    localStorage.removeItem('orderData');
    localStorage.removeItem('product');
};