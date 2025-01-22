import { JWTPayload, SignJWT, jwtVerify } from 'jose'

const Secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY)

export const jwtEncrypt = async (payload: JWTPayload, exp: string | number | Date) => {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(exp)
        .sign(Secret)
}


export async function jwtDecrypt(input: string) {
    const { payload } = await jwtVerify(input, Secret, {
        algorithms: ['HS256'],
    })

    return payload
}