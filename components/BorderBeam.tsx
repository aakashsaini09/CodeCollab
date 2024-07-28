import { BorderBeam } from "@/components/magicui/border-beam";

export default function BorderBeamDemo() {
  return (
    <div className="relative flex w-[80vw] h-[60vh] flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-black md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-700 to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span>
      <BorderBeam size={100} duration={10} delay={8} />
    </div>
  );
}
