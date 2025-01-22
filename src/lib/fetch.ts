import { ROUTES } from "@/config/routes";
import { redirect } from "next/navigation";

interface FetchApiTypes {
    baseUrl?: string;
    url: string;
    request: RequestInit
}

export interface ResponseType<T> {
    success: boolean,
    message: string,
    data: T,
    statusCode: number
}

export default async function fetchAPI({
    baseUrl = process.env.NEXT_PUBLIC_API_URL,
    url,
    request
}: FetchApiTypes): Promise<[Response | null, null | string]> {
    try {
        const req = await fetch(`${baseUrl}${url}`, request)
        if (!req.ok) {
            const data = await req.json()
            throw new Error(data.message)
        }

        return [req, null]

    } catch (error) {
        if ((error as Error).message === 'Unauthorized') {
          redirect(ROUTES.API.AUTH.LOGOUT);
        }
        return [null, (error as Error).message]
    }
}