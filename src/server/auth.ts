'use server'

import { UserSignupTypes, UserTypes } from "@/types/user";
import fetchAPI, { type ResponseType } from "../lib/fetch";
import { cookies } from "next/headers";
import { jwtEncrypt } from "@/lib/jwt";
import { JWTPayload } from "jose";

export async function SignupAction(value: UserSignupTypes): Promise<[ResponseType<null> | null, string | null]> {

    const { name, ...rest } = value;
    const [req, error] = await fetchAPI({
        url: '/auth/signup',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name.toLocaleLowerCase(), ...rest, })
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}

export async function LoginAction(value: { email: string, password: string }): Promise<[ResponseType<UserTypes> | null, string | null]> {
    const cookie = await cookies()
    const [req, error] = await fetchAPI({
        url: '/auth/login',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: value.email.toLocaleLowerCase(),
                password: value.password
            })
        }
    })

    const res = req ? await req.json() as ResponseType<UserTypes> : null;

    if (res) {
        const exp = new Date(res.data.expiresIn)
        const encryptedSessionData = await jwtEncrypt(res.data as unknown as JWTPayload, exp)
        cookie.set('user', encryptedSessionData, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            path: "/",
            expires: exp
        })
    }

    return [res, error]
}

export async function ForgotAction(email: string): Promise<[ResponseType<null> | null, string | null]> {
    const [req, error] = await fetchAPI({
        url: '/auth/forgot',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}

export async function RestAction(email: string, password: string, token: string): Promise<[ResponseType<null> | null, string | null]> {
    const [req, error] = await fetchAPI({
        url: '/auth/forgot/reset',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, token })
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}