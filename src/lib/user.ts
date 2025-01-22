import { cookies } from "next/headers"
import { jwtDecrypt } from "./jwt"
import { UserTypes } from "@/types/user"

export async function userDetails() {
    const cookie = await cookies()
    const userCookieValue = cookie.get('user')?.value

    const decryptedSessionData = userCookieValue ? await jwtDecrypt(userCookieValue) : undefined
    return decryptedSessionData as unknown as UserTypes

}