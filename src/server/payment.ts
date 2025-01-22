import fetchAPI, { ResponseType } from "@/lib/fetch";
import { UserTypes } from "@/types/user";

export async function InsurancePaymentCreate<T>(user: UserTypes, amount: string): Promise<[ResponseType<T> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/payment/create`,
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
            body: JSON.stringify({
                amount: amount
            })
        }
    })

    const res = req ? await req.json() as ResponseType<T> : null;

    return [res, error]
}

export async function InsurancePaymentStatus<T>(user: UserTypes, id: string): Promise<[ResponseType<T> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/payment/status?id=${id}`,
        request: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            }
        }
    })

    const res = req ? await req.json() as ResponseType<T> : null;

    return [res, error]
}



export async function InsurancePaymentMonthly(user: UserTypes): Promise<[ResponseType<null> | null, string | null]> {

    const [req, error] = await fetchAPI({
        url: `/payment/period`,
        request: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.accessToken}`,
                "X-Requested-Email": user.email
            },
            body: JSON.stringify({
                period: "Monthly"
            })
        }
    })

    const res = req ? await req.json() as ResponseType<null> : null;

    return [res, error]
}