"use server";
import { UserTypes } from "@/types/user";
import fetchAPI, { type ResponseType } from "../lib/fetch";
import { QuotesTypes } from "@/types/quotes";

export async function Quotations(
  user: UserTypes,
  role: string
): Promise<[ResponseType<QuotesTypes[]> | null, string | null]> {
  const [req, error] = await fetchAPI({
    url: `/internal/list/quotations?page=1&role=${role}`,
    request: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
        "X-Requested-Email": `${user.email}`,
      },
    },
  });

  const res = req ? ((await req.json()) as ResponseType<QuotesTypes[]>) : null;
  return [res, error];
}
