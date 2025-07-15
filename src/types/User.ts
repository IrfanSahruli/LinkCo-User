export interface Affiliate {
    id: number;
    userId: number;
    referral: string;
    referralCode: string;
    referralBy: number;
}

export interface User {
    id?: number;
    name?: string;
    email?: string;
    noHandPhone?: number | string;
    password?: string;
    referralCode?: string;
    affiliate?: Affiliate;
    saldo?: number;
    role?: string;
};