'use server'

import { TimelineEvent } from "@/components/ui/custom/timeline";
import fetchAPI, { type ResponseType } from "../lib/fetch";
import { UserTypes } from "@/types/user";
import { InsuranceFormQueryTypes } from "@/types/insurance-form";

export async function InsuranceStatus(user: UserTypes): Promise<[ResponseType<{ status: TimelineEvent[], routes: string[] }> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: '/forms/insurance/status',
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
        }
    })

    const res = req ? await req.json() as ResponseType<{ status: TimelineEvent[], routes: string[] }> : null;

    return [res, error]
}

export async function InsuranceFormStatus<T>(user: UserTypes, FormType: InsuranceFormQueryTypes): Promise<[ResponseType<T> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/forms/insurance/get?FormType=${FormType}`,
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
        }
    })

    const res = req ? await req.json() as ResponseType<T> : null;

    return [res, error]
}


export async function InsuranceFormSetData<T>(user: UserTypes, FormType: InsuranceFormQueryTypes, body: T): Promise<[ResponseType<null> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/forms/insurance/save?FormType=${FormType}`,
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
            body: JSON.stringify(body)
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}

export async function InsuranceFormCreateQuote<T>(user: UserTypes, FormType: InsuranceFormQueryTypes, body: T): Promise<[ResponseType<null> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/forms/insurance/createquote?FormType=${FormType}`,
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
            body: JSON.stringify(body)
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}


export async function InsuranceFormFullQuote<T , V>(user: UserTypes, FormType: InsuranceFormQueryTypes, body: T): Promise<[ResponseType<V> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/forms/insurance/fullquote?FormType=${FormType}`,
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
            body: JSON.stringify(body)
        }
    })

    const res = req ? await req.json() as ResponseType<V> : null;

    return [res, error]
}

export async function InsuranceFormBlockQuote<T>(user: UserTypes, FormType: InsuranceFormQueryTypes, body: T): Promise<[ResponseType<null> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/forms/insurance/blockquote?FormType=${FormType}`,
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
            body: JSON.stringify(body)
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}


export async function InsuranceFormReset(user: UserTypes): Promise<[ResponseType<null> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/forms/insurance/reset`,
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            }
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}