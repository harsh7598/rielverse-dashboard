import { PaymentSearchParams } from "@/app/dashboard/quotation/payment/page";
import { UserTypes } from "@/types/user";
import PaymentSuccess from "./components/payment-success";
import { InsurancePaymentStatus } from "@/server/payment";
import { redirect } from "next/navigation";
import { ROUTES } from "@/config/routes";

interface PaymentViewPropsTypes {
  user: UserTypes;
  searchParams: PaymentSearchParams;
}

export interface PaymentStatusTypes {
  payment: {
    status: "complete" | "open";
    customer_email: string;
    id: string;
    payment_status: "paid" | "unpaid";
    amount: number;
    time: string;
  };
  refNo: string;
  policyNo: string;
}

export default async function PaymentView({
  user,
  searchParams,
}: PaymentViewPropsTypes) {
  const [res, error] = await InsurancePaymentStatus<PaymentStatusTypes>(
    user,
    searchParams.session_id
  );

  if (!res || error) {
    redirect(ROUTES.DASHBOARD.ROOT);
  }

  const data = res.data;

  if (data.payment.payment_status === "unpaid") {
    redirect(ROUTES.DASHBOARD.ROOT);
  }

  if (data.payment.payment_status === "paid") {
    return (
      <PaymentSuccess
        payment={data}
        refNo={data.refNo}
        policyNo={data.policyNo}
      />
    );
  }
}
