import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ClipBoard from "@/components/ui/custom/clipboard";
import { cn, formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { PaymentStatusTypes } from "../payment-view";

import Logo from "@/assets/big-logo.svg";
import Image from "next/image";
import InsruanceDocView from "../../components/insurance-doc-view";

interface PaymentSuccessPropsTypes {
  payment: PaymentStatusTypes;
  refNo: string;
  policyNo: string;
}

export default async function PaymentSuccess({
  payment,
  refNo,
  policyNo,
}: PaymentSuccessPropsTypes) {
  const DATA = [
    {
      name: "Policy No",
      value: policyNo,
      isCopy: true,
    },
    {
      name: "Ref No",
      value: refNo,
      isCopy: true,
    },
    {
      name: "Payment Time",
      value: format(payment.payment.time, "PPP"),
      isCopy: false,
    },
    {
      name: "Transaction ID",
      value: payment.payment.id,
      isCopy: true,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <div className="bg-[#F5F5F5]  drop-shadow-lg border border-primary py-5 px-3 rounded-3xl w-full lg:w-1/4 justify-center items-center flex">
        <Image src={Logo} alt="logo" width={100} height={100} />
      </div>
      <section className="flex flex-col lg:flex-row gap-6 justify-center  w-full  lg:px-10 xl:px-28">
        <Card className="w-full lg:w-1/2">
          <CardHeader className="flex items-center gap-4">
            <div className="flex flex-col gap-1 justify-center items-center">
              <h1 className="font-semibold text-2xl text-primary">
                Payment Success!
              </h1>
              <p className="text-sm ">
                Your payment has been successfully done.
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="flex w-full flex-col py-4 gap-3">
              {DATA.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-black/60 text-sm sm:text-base">
                    {item.name}
                  </span>
                  <div
                    className={cn(
                      "flex items-center gap-2",
                      !item.isCopy && "mr-5"
                    )}>
                    <span className="text-[#452262]  text-sm sm:text-base ">
                      {item.value}
                    </span>
                    {item.isCopy && <ClipBoard url={item.value} />}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <hr className="border-dashed" />

              <div className="flex justify-between items-center">
                <span className="text-black/60 text-sm sm:text-base">
                  Amount
                </span>
                <span className="text-[#452262]  text-sm sm:text-base ">
                  {formatCurrency(payment.payment.amount, 2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <InsruanceDocView entity="policyNo" value={policyNo} className="lg:w-1/2" />
      </section>
    </div>
  );
}
