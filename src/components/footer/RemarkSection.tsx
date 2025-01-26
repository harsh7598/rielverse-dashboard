import React from "react";

const RemarkSection: React.FC = () => {
  return (
    <div
      className={
        "w-full max-[800px]:px-2 max-[1440px]:px-6 max-w-[1190px] min-[1800px]:max-w-[1600px] flex flex-col items-center px-20"
      }
    >
      <p
        style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
        data-aos="fade-down"
        className=
          "text-start text-[14px] max-[800px]:text-[12px] font-semibold leading-7 opacity-75" 
      >
        Remark
        <br />
        Please answer all the above questions truthfully. If the insured
        conceals the truth or makes a false statement, it will result in the
        voiding of this insurance contract. The insurance company has the right
        to terminate the insurance contract under Section 865 of the Civil and
        Commercial Code and may refuse to pay compensation.
        <br />
        <br/>
        The Company does not contact customers through other (communication)
        channels apart from the Company’s official channels under any
        circumstances.
        <br />
        <br />
        Please note that under no circumstances shall the Company be held
        liable or responsible for any claims, losses, damages, expenses, or
        other inconvenience resulting from or in any way connected with such
        communication.
        <br />
        <span>Copyright 2024 Rielverse All Rights Reserved. | Privacy Policy</span>
        <br />
        <span>Designed by</span><span className="font-sans text-sm font-normal leading-[36px] text-left decoration-slice text-secondary"> Konax Technologies Pvt Ltd </span>
      </p>
    </div>
  );
};

export default RemarkSection;
