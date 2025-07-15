export interface Affiliate {
    id: number;
    userId: number;
    referral: string;
    referralCode: string;
    referralBy: number;
};

export interface Kyc {
    id?: number;
    userId?: number;
    fullName?: string;
    nik?: string;
    placeOfBirth?: string;
    dateOfBirth?: string;
    address?: string;
    ktpPhoto?: string;
    selfiePhoto?: string;
    status?: string;
    rejectedReason?: string;
};

export interface User {
    id?: number;
    name?: string;
    email?: string;
    noHandPhone?: number | string;
    password?: string;
    referralCode?: string;
    affiliate?: Affiliate;
    saldo?: number;
    isKYCApproved?: boolean;
    role?: string;
};