'use server'
import { UserTypes } from "@/types/user";
import fetchAPI, { type ResponseType } from "../lib/fetch";


export async function DashbordTable(user: UserTypes): Promise<[ResponseType<null> | null, string | null]> {
    const [req, error] = await fetchAPI({
        url: '/internal/stats/active/users',
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
        }
    })

    const res =  await req?.json();
    return [res, error]
}