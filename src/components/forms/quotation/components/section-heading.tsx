export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="font-semibold text-lg flex h-full gap-4 ">
      <hr className="w-1 bg-orange-400 h-7" />
      <h1 className="font-semibold text-lg text-[#452262]">{title}</h1>
    </div>
  );
}
