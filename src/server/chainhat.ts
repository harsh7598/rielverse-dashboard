'use server'

import fetchAPI from "../lib/fetch";
import { AddressDetailsTypes, ChainHatAddressTypes, ChainHatTokenTypes, GetProfileDetailsTypes } from "@/types/chainhat";

export async function GetToken(): Promise<[ChainHatTokenTypes | null, string | null]> {

    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT,
        url: '/auth/realms/onepatch/protocol/openid-connect/token',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "X-ebao-tenant-Id": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_ID,
                "X-ebao-tenant-code": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_CODE,
            },
            body: new URLSearchParams({
                "grant_type": "client_credentials",
                "client_id": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_CLIENT_ID,
                "client_secret": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_CLIENT_SECRET
            })
        }
    })

    const res = req ? await req.json() as ChainHatTokenTypes : null;

    return [res, error]
}

export async function GetAddress(query: string): Promise<[ChainHatAddressTypes[] | null, string | null]> {

    const [token] = await GetToken()

    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT,
        url: '/connector-api/route/addressSearch/v1/address',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token?.access_token}`,
                "X-ebao-tenant-Id": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_ID,
                "X-ebao-tenant-code": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_CODE,
            },
            body: JSON.stringify({
                "address": {
                    "freeFormAddress": query
                }
            })
        }
    })

    const res = req ? (await req.json()).providerResponse as ChainHatAddressTypes[] : null;

    return [res, error]
}


export async function GetAddressFullDetails(gnafPid: string): Promise<[AddressDetailsTypes | null, string | null]> {


    const [token] = await GetToken()

    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT,
        url: '/connector-api/route/addressSearch/v1/address',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token?.access_token}`,
                "X-ebao-tenant-Id": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_ID,
                "X-ebao-tenant-code": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_CODE,
            },
            body: JSON.stringify({
                "address": {
                    "gnafPid": gnafPid
                },
                "typeOfRequest": "GNF_TOKEN"
            })
        }
    })

    const res = req ? await req.json() as AddressDetailsTypes : null;

    return [res, error]

}


export async function GetProfileDetail(id: string): Promise<[GetProfileDetailsTypes | null, string | null]> {


    const [token] = await GetToken()

    const [req, error] = await fetchAPI({
        baseUrl: process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT,
        url: '/connector-api/route/companyInformation/v1/companyProfile',
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token?.access_token}`,
                "X-ebao-tenant-Id": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_ID,
                "X-ebao-tenant-code": process.env.NEXT_PUBLIC_AUSTRALIA_EAST_CHAINTHAT_EBAO_TENANT_CODE,
            },
            body: JSON.stringify({
                "companyIdentifierType": "ABN",
                "identifierValue": id
            })
        }
    })

    const res = req ? await req.json() as GetProfileDetailsTypes : null;

    return [res, error]

}