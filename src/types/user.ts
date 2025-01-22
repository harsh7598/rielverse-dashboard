import { z } from "zod";

export const UserRolesSchema = z.enum(['Agent', 'User', 'Admin' ,'SuperAdmin']);
export type UserRolesTypes = z.infer<typeof UserRolesSchema>;

export interface UserSignupTypes {
    email: string;
    name: string;
    role: UserRolesTypes;
    address?: string;
    phone: string;
}

export interface UserTypes extends UserSignupTypes {
    _id: string;
    isEmailVerified: boolean;
    isUserVerified: boolean;
    createdAt: Date;
    accessToken: string
    refreshToken: string
    expiresIn: string
}