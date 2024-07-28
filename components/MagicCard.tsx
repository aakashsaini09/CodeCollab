

import { MagicCard } from "@/components/magicui/magic-card";

export default function MagicCardDemo() {
  return (
    <div
      className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={"#4b1769"}>
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={"#4b1769"}
      >
        Card
      </MagicCard>
    </div>
  );
}
