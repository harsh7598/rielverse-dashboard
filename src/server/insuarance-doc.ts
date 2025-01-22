'use server'

import fetchAPI from "@/lib/fetch";
import { InsuremoDocTypes, InsuremoTokenTypes } from "@/types/insurance-doc";

export async function GetToken(): Promise<[InsuremoTokenTypes | null, string | null]> {

    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_INSUREMO_API,
        url: '/cas/ebao/v2/json/tickets',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-ebao-tenant-code": process.env.NEXT_PUBLIC_INSUREMO_TENANT_CODE,
                "x-mo-user-source-id": process.env.NEXT_PUBLIC_INSUREMO_SOURCE_ID,
                "x-mo-client-id": process.env.NEXT_PUBLIC_INSUREMO_CLIENT_ID,
                "x-mo-tenant-id": process.env.NEXT_PUBLIC_INSUREMO_TENANT_ID,
            },
            body: JSON.stringify({
                "username": process.env.NEXT_PUBLIC_INSUREMO_USERNAME,
                "password": process.env.NEXT_PUBLIC_INSUREMO_PASSWORD
            })
        }
    })

    

    
    const res = req ? await req.json() as InsuremoTokenTypes : null;
    
    return [res, error]
}

export async function FetchInsruanceDoc(value: string, entity: "proposalNo" | 'policyNo'): Promise<[InsuremoDocTypes[] | null, string | null]> {

    const [token, issue] = await GetToken();

    if (issue) {
        return [null, issue]
    }


    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_INSUREMO_SERVER,
        url: `/sureinsureau/v1/appframework-bff-app/doclist?value=${value}&entity=${entity}`,
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token?.access_token}`
            }
        }
    })


    const res = req ? await req.json() as InsuremoDocTypes[] : null;

    return [res, error]
}


export async function DownloadInsruanceDoc(key: string): Promise<[Blob | null, string | null]>{

    const [token, issue] = await GetToken();

    if (issue) {
        return [null, issue]
    }

    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_INSUREMO_SERVER,
        url: `/sureinsureau/v1/appframework-bff-app/downloaddoc?value=${key}&entity=insuremoPolicy`,
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token?.access_token}`
            }
        }
    })

    const res = req ? await req.blob() : null;

    return [res, error]
}