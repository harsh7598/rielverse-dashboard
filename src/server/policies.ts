import { UserTypes } from "@/types/user";
import fetchAPI, { type ResponseType } from "../lib/fetch";
import { PoliciesTypes } from "@/types/policies";

export async function Policies(
  user: UserTypes,
  role: string
): Promise<[ResponseType<PoliciesTypes[]> | null, string | null]> {
  const [req, error] = await fetchAPI({
    url: `/internal/list/policies?page=1&role=${role}`,
    request: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
        "X-Requested-Email": `${user.email}`,
      },
    },
  });

  const res = req
    ? ((await req.json()) as ResponseType<PoliciesTypes[]>)
    : null;
  return [res, error];
}
