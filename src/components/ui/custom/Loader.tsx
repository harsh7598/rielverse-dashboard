import Loading from "@/assets/Loading.gif";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={Loading}
        alt="Loading"
        width={300}
        height={300}
        className="w-[300px] h-[300px]"
      />
    </div>
  );
}
