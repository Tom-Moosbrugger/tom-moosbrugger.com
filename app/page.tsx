import Image from "next/image";

export default function Home() {
  return (
   <h1 className="text-green text-2xl bg-black">
      <span className="text-gray-400 font-thin">{"<"}</span>
      TomMoosbrugger
      <span className="text-gray-400 font-thin">{" />"}</span>
    </h1>
  );
}
