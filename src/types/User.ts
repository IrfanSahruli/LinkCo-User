export interface Affiliate {
    id: number;
    userId: number;
    referral: string;
    referralCode: string;
    referralBy: number;
};

export interface RelationUser {
    userId: number;
    name: string;
    email: string;
    relationLevel: number;
    children: RelationUser[];
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

export interface Withdraw {
    id?: number;
    userId?: number;
    withdrawTo?: string;
    noRekening?: string;
    totalWithdraw?: number | string;
    selfiePhoto?: string;
    status?: string;
    rejectedReason?: string
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